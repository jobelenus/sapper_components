<script>
import Steps from '../../components/Steps.svelte'
import { fly } from 'svelte/transition'
import { stores } from '@sapper/app';
const { session } = stores();

let email, pwd, code, success

// change any of these to false and you won't go to the next step
const validate_email = () => {
  return true
}
const validate_pwd = () => {
  return true
}
const validate_2fa = () => {
  return true
}
const done = async () => {
  let resp = await fetch('/login.json', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  let body = false
  try {
    body = await resp.json()
  } catch (err) {
    console.log("Body json failure, ", err)
  }
  if (resp.ok && body) {
    session.set({ user_data: body });
    success = true
    setTimeout(() => {
      window.location = '/'
    }, 1000)
  } else {
    success = false
  }
}
</script>

<style type="text/scss">
.center {
  width: 20em;
  margin: 0 auto;
  text-align: center;
  
  h1 {
    margin-bottom: .75em
  }
}
.step {
  label, input {
    display: block;
    text-align: left;
    width: 100%;
  }
  button {
    margin-top: 1rem;
  }
}
</style>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="center">
<h1>Login</h1>
<Steps step_functions="{[validate_email, validate_pwd, validate_2fa]}" done={done}>
  <div class="step" slot="step0" let:submit>
    <div out:fly="{{duration:150, x: -25}}" in:fly="{{delay: 150, duration: 150, x: 25}}">
      <label for="email">Email</label>
      <form on:submit|preventDefault={submit}>
        <input id="email" bind:value="{email}" required type="email" placeholder="john.snow@thewall.north">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="step1" let:submit>
    <div out:fly="{{duration:150, x: -25}}" in:fly="{{delay: 150, duration: 150, x: 25}}">
      <form on:submit|preventDefault={submit}>
        <label for="pwd">Password</label>
        <input id="pwd" bind:value="{pwd}" required type="password">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="step2" let:submit>
    <div out:fly="{{duration:150, x: -25}}" in:fly="{{delay: 150, duration: 150, x: 25}}">
      <form on:submit|preventDefault={submit}>
        <p>Enter the code you received to continue</p>
        <label for="code">Code</label>
        <input id="code" bind:value="{code}" required type="text">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="done" let:submit>
    <div out:fly="{{duration:150, x: -25}}" in:fly="{{delay: 150, duration: 150, x: 25}}">
      {#if success === true}
      <h3>Thank, you</h3>
      <p>You are being redirected</p>
      {:else} {#if success === false}
      <h3>Uh oh</h3>
      <p>We could not log you in</p>
      {:else}
      <p>Logging you in now...</p>
      {/if}{/if}
    </div>
  </div>
</Steps>
</div>