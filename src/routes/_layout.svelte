<script>
	import Nav from '../components/Nav.svelte';

  export let segment;

  let left = true;
  let top = !left;
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
    }
  }
</style>
<div class="container" class:left class:top>
  <Nav {segment} {left} {top} {navitems}/>

  <main>
    <slot></slot>
  </main>
</div>