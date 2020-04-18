<script context="module">
let toasts = []
let idx = 0

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
  z-index: --zIndex;
  top: 0;
  &.left {
    left: 0;
  }
  &.center {
    left: 50%;
  }
  &.right {
    right: 0;
  }
}
</style>

<ul class="toasts" class:left class:center class:right style="--zIndex: {zIndex}"
  {#each toasts as toast}
  <li role="alert" aria-live="assertive" aria-atomic="true" class="toast">
    <div class="toast-header">{toast.label}</div>
    <div class="toast-body">{toast.message}</div>
  </li>
  {/each}
</ul>