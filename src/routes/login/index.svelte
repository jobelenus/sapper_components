<script>
import Steps from '../../components/Steps.svelte'
import { fly, fade } from 'svelte/transition'

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
.step {
  display: none;
  &.active {
    display: block;
  }
}
</style>

<Steps step_functions="{[validate_email, validate_pwd, validate_2fa]}" done={done}>
  <div class="step" slot="step0" let:submit let:active class:active>
    <div transition:fade>
      <h1>Login</h1>
      <label for="email">Email</label>
      <form on:submit|preventDefault={submit}>
        <input id="email" bind:value="{email}" required type="email" placeholder="john.snow@thewall.north">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="step1" let:submit let:active class:active>
    <div transition:fade>
      <form on:submit|preventDefault={submit}>
        <label for="pwd">Password</label>
        <input id="pwd" bind:value="{pwd}" required type="password">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="step2" let:submit let:active class:active>
    <div transition:fade>
      <form on:submit|preventDefault={submit}>
        <p>You should receive a code, enter it here to continue</p>
        <label for="code">Code</label>
        <input id="code" bind:value="{code}" required type="text">
        <button type="submit">Next</button>
      </form>
    </div>
  </div>
  <div class="step" slot="done" let:submit let:active class:active>
    <div transition:fade>
      <h3>Thank, you</h3>
    </div>
  </div>
</Steps>