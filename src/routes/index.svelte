<style type="text/scss">
  .switcher.second {
    /* example of overriding layout for a container */
    --measure: 340px;
    --s1: .5em;

    .card.rounded {
      /* example of overriding a radius */
      --radius: 30px;
    }
  }
  .switcher {
    margin-top: 1.5em;
  }
  .card {
    float: left;
    height: 5em;
    border: 1px solid var(--light-border);
    background: var(--light-muted-color);
  }
</style>

<svelte:head>
	<title>Dashboard Example</title>
</svelte:head>

<h1>Dashboard Example</h1>

<div class="switcher first">
  <div>
    <div class="card rounded shadow hover"></div>
    <div class="card rounded shadow depth2 hover"></div>
    <div class="card rounded shadow depth3 hover"></div>
    <div class="card rounded shadow depth4"></div>
  </div>
</div>

<div class="switcher second three-wide">
  <div>
    <div class="card rounded shadow hover"></div>
    <div class="card shadow depth2 hover"></div>
    <div class="card shadow depth3 hover"></div>
    <div class="card shadow depth4"></div>
  </div>
</div>