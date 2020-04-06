<script context="module">
    export function preload(page, { user_data }) {  // this matches the sapper.middleware object key
      return { user_data };
    };
</script>

<script>
  import { onMount } from 'svelte';
  import Nav from '../components/Nav.svelte';
  import { stores } from '@sapper/app';
  const { session } = stores();
  export let user_data;

  export let segment;
  let left = true;  // do you want the navigation on the left side
  let top = !left;  // nav cannot be on the top if its on the left
  let center = !left;  // main content will be block-centered under a top nav

  let navitems = [
    {rel: 'prefetch', route: 'about', label: 'About'},
    {rel: 'prefetch', route: 'blog', label: 'Blog'},
    {rel: 'prefetch', route: 'form', label: 'Example Form'},
  ] 

  console.log("USER DATA", user_data)
  onMount(() => {
    if (!user_data && window.location.pathname != '/login') {
      window.location = '/login'
    }
  })
</script>

<style type="text/scss">
  div.container {
    display: flex;
    min-height: 100vh;

    &.left {
      flex-direction: row;
      align-items: stretch;
      align-content: stretch;
    }

    &.top {
      flex-direction: column;
    }

    main {
      padding: 2em;
      flex-grow: 1;
      :global(article) {
        max-width: 32em;
      }
      &.center {
        :global(article) {
          margin: 0 auto;
        }
      }
    }
  }
</style>
<div class="container" class:left class:top>
  {#if segment === 'login'}
  <slot></slot>
  {:else}
  <Nav {segment} {left} {top} {navitems}/>

  <main class:center>
    <slot></slot>
  </main>
  {/if}
</div>