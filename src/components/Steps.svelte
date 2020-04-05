<script>
/**
 * We cannot have dynamic prop names, so we can't loop
 * So I am just picking a limit of 5 steps, can always create more
 */
export let step_functions = []
export let done
let is_done = false
let current_step = 0

const reset = () => {
  is_done = false
  current_step = 1
}

const next = () => {
  current_step++
  current_step = Math.min(current_step, step_functions.length)
  if (current_step === step_functions.length) {
    if (!is_done) {
      done()  // only allow done fn to be called once
    }
    is_done = true
  }
}
const back = () => {
  current_step--;
  current_step = Math.max(current_step, 0)
}
const submit = () => {
  if (step_functions[current_step]() === true) {
    next()
  } 
}
</script>

<section>
  <slot name="controls" back={back} reset={reset}></slot>  <!-- if you want a consistent back button placement, or restart functionality -->
  <slot name="step0" submit={submit} active={!is_done && current_step===0}></slot>
  <slot name="step1" submit={submit} back={back} active={!is_done && current_step===1}></slot>
  <slot name="step2" submit={submit} back={back} active={!is_done && current_step===2}></slot>
  <slot name="step3" submit={submit} back={back} active={!is_done && current_step===3}></slot>
  <slot name="step4" submit={submit} back={back} active={!is_done && current_step===4}></slot>
  <slot name="done" reset={reset} active={is_done}></slot>
</section>