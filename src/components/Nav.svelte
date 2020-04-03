<script>
  export let segment;

  export let top = false;
  export let left = false;
  export let navitems = [];
  export let home_label = 'Home';
</script>

<style type="text/scss">
  nav.top {
    padding: 0 1em;
    border-bottom: 1px solid var(--dark-border);

    a {
      padding: 1em;
    }

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
    width: 8em;
    padding: 1em 0 1em 1em;
    border-right: 1px solid var(--dark-border);

    ul {
      flex-direction: column;
      margin-right: 1em;

      a {
        padding: 1em 0;
        width: 100%;
      }

      a[aria-current]::after {
        height: calc(100% - 1em);
        width: 5px;
        right: -1em;
        top: 15%;
      }
    }
  }

	nav {
		font-weight: 600;
    background: var(--dark-saturated-color);
    color: var(--text-on-dark);

    ul {
      display: flex;

      a {
        text-decoration: none;
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
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>{home_label}</a></li>
    {#each navitems as item}
		  <li><a rel={item.rel} aria-current='{segment === item.route ? "page" : undefined}' href='{item.route}'>{item.label}</a></li>
    {/each}
	</ul>
</nav>
