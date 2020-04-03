<script>
  export let segment;
  export let top = false;
  export let left = false;
</script>

<style type="text/scss">
  nav.top {
    border-bottom: 1px solid var(--dark-border);
    ul {
      flex-direction: row;
    }
  }

  nav.left {
    border-right: 1px solid var(--dark-border);
    ul {
      flex-direction: column;
    }
  }

	nav {
		font-weight: 600;
    padding: 0 1em;
    background: var(--dark-background);
    color: var(--text-on-dark);

    ul {
      display: flex;

      a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;

        &[aria-current] {
          position: relative;
          display: inline-block;

          &::after {
            position: absolute;
            content: '';
            width: calc(100% - 1em);
            height: 5px;
            background-color: var(--highlight-color);
            display: block;
            bottom: -1px;
          }
        }
      }
    }
	}
</style>

<nav class:left class:top>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
	</ul>
</nav>
