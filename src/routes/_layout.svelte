<script>
	import Nav from '../components/Nav.svelte';

  export let segment;

  let left = true;  // do you want the navigation on the left side
  let top = !left;  // nav cannot be on the top if its on the left
  let center = !left;  // main content will be block-centered under a top nav

  let navitems = [
    {rel: 'prefetch', route: 'about', label: 'About'},
    {rel: 'prefetch', route: 'blog', label: 'Blog'},
  ] 
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
  <Nav {segment} {left} {top} {navitems}/>

  <main class:center>
    <slot></slot>
  </main>
</div>