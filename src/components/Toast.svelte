<script context="module">
let toasts = [
  {label: 'Success', message: 'Hello, World!', success: true}
]
let idx = toasts.length

export function toast ({label, message}) {
  toasts = [...toasts, ({idx, label, message})]
  idx++
}
export function clear () {
  toasts = []
  idx = 0
}
</script>

<script>
export let left, center, right, zIndex

</script>

<style type="text/scss">
.toasts {
  position: absolute;
  width: 12rem;
  display: flex;
  flex-direction: column;
  z-index: --zIndex;
  top: 5px;
  &.left {
    left: 0;
  }
  &.center {
    left: calc(50% - 6rem);
  }
  &.right {
    right: 0;
  }
}
</style>

<ul class="toasts" class:left class:center class:right style="--zIndex: {zIndex}">
  {#each toasts as { label, message, success, error, idx } (idx)}
  <li role="alert" aria-live="assertive" aria-atomic="true" class="toast" class:success class:error>
    <div class="toast-header">{label}</div>
    <div class="toast-body">{message}</div>
  </li>
  {/each}
</ul>