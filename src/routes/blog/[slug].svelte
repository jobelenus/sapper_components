<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	article :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	article :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	article :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	article :global(ul) {
		line-height: 1.5;
	}

	article :global(li) {
		margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class='flow'>
  <h1>{post.title}</h1>
  
	{@html post.html}
</article>
