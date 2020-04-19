<script context="module">
import {toasts} from "./ToastStore.js"
</script>

<script>
import { fly } from 'svelte/transition'
import { flip } from 'svelte/animate';
export let left, center, right, zIndex, width

</script>

<style type="text/scss">
.toasts {
  position: absolute;
  width: var(--width);
  display: flex;
  flex-direction: column;
  z-index: --zIndex;
  top: 0;
  &.left {
    left: 0;
  }
  &.center {
    left: calc(50% - calc(var(--width) / 2));
  }
  &.right {
    right: 0;
  }
  li {
    padding: .5rem;
    margin: .5rem 0;
  }
}
</style>

<ul class="toasts" class:left class:center class:right style="--zIndex: {zIndex}; --width: {width}">
  {#each $toasts as { label, message, success, error, idx } (idx)}
  <li animate:flip transition:fly={{y: -75, duration: 250}} role="alert" aria-live="assertive" aria-atomic="true" class="toast" class:success class:error>
    <div class="toast-header">{label}</div>
    <div class="toast-body">{message}</div>
  </li>
  {/each}
</ul>