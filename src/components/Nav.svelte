<script>
  export let segment;
  export let top = false;
  export let left = false;
</script>

<style type="text/scss">
  nav.top {
    padding: 0 1em;
    border-bottom: 1px solid var(--dark-border);

    ul {
      flex-direction: row;

      a[aria-current]::after {
        width: calc(100% - 1.9em);
        height: 5px;
        bottom: -1px;
      }
    }
  }

  nav.left {
    padding: 1em 0 1em 1em;
    border-right: 1px solid var(--dark-border);

    ul {
      flex-direction: column;

      a[aria-current]::after {
        height: calc(100% - 1em);
        width: 5px;
        right: -4px;
        top: 15%;
      }
    }
  }

	nav {
		font-weight: 600;
    background: var(--dark-background);
    color: var(--text-on-dark);

    ul {
      display: flex;

      a {
        text-decoration: none;
        padding: 1em;
        display: block;

        &[aria-current] {
          position: relative;
          display: inline-block;

          &::after {
            position: absolute;
            content: '';
            background-color: var(--highlight-color);
            display: block;
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
