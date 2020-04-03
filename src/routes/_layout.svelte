<script>
	import Nav from '../components/Nav.svelte';

  export let segment;
  export let left = false;
  export let top = !left;
</script>

<style type="text/scss">
  :global(:root) {
    // dark and light colors get used together
    --dark-background: #252e42;
    --dark-border: #333;
    --text-on-dark: white;

    --light-background: white;
    --light-border: #ededed;
    --text-on-light: black;

    // working with a 5 color palette
    --dark-saturated-color: #351d31;
    --dark-muted-color:#684a66;
    --highlight-color:#f55951;
    --light-saturated-color:#edd2cb;
    --light-muted-color:#f1e8e6;
    // and a designated success and error color
    --success-color:#1aa90a;
    --error-color:#a9120a;
  }

  :global(body) {
    background: var(--light-background);
    color: var(--text-on-light);
  }

  div.container {
    display: flex;
    min-height: 100vh;

    main {
      padding: 2em;
    }
  }

  div.container.left {
    flex-direction: row;
    align-items: stretch;
    align-content: stretch;
  }

  div.container.top {
    flex-direction: column;
  }
  
</style>
<div class="container" class:left class:top>
  <Nav {segment} {left} {top}/>

  <main>
    <slot></slot>
  </main>
</div>