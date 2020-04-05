<style type="text/scss">
  .sized_components {
    margin-top: 1.5em;

    .card {
      margin: 10px;
      min-height: 200px;
      float: left;
      border: 1px solid var(--light-border);
      background: var(--light-muted-color);
    }
  }
  .sized_components.first {
    div.card {
      width: 280px;
    }
  }
  .sized_components.second {
    div.card {
      width: 480px;
      &.rounded {
        /* example of overriding a radius */
        --radius: 30px;
      }
    }
  }
</style>

<svelte:head>
	<title>Dashboard Example</title>
</svelte:head>

<h1>Dashboard Example</h1>

<section class="sized_components first">
  <div class="card rounded shadow hover"></div>
  <div class="card rounded shadow depth2 hover"></div>
  <div class="card rounded shadow depth3 hover"></div>
  <div class="card rounded shadow depth4"></div>
</section>

<section class="sized_components second">
  <div class="card rounded shadow hover"></div>
  <div class="card shadow depth2 hover"></div>
  <div class="card shadow depth3 hover"></div>
  <div class="card shadow depth4"></div>
</section>