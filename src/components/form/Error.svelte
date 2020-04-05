<script>
  import { fade } from 'svelte/transition';
  export let message;
</script>

{#if message}
  <p class="error" transition:fade="{{ duration: 150 }}">{message}</p>
{/if}