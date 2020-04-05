<script>
import Steps from '../../components/Steps.svelte'
import { fly } from 'svelte/transition'

let email, pwd, code

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
const done = () => {
  alert('And you are done!')
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
        <p>You should receive a code, enter it here to continue</p>
        <label for="code">Code</label>
        <input id="code" bind:value="{code}" required type="text">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="done" let:submit>
    <div out:fly="{{duration:150, x: -25}}" in:fly="{{delay: 150, duration: 150, x: 25}}">
      <h3>Thank, you</h3>
    </div>
  </div>
</Steps>
</div>