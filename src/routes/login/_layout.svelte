<style type="text/scss">
  .cover {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    padding: 1rem;
  }

  .cover > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .cover > :first-child:not(h1) {
    margin-top: 0;
  }

  .cover > :last-child:not(h1) {
    margin-bottom: 0;
  }

  .cover > .login {
    margin-top: auto;
    margin-bottom: auto;
    height: 30vh;  /* added to  every-layout cover rules, for the animation to not change the height of container */
  }
</style>

<div class="cover">
  <div></div>
  <div class="login"><slot></slot></div>
  <div></div>
</div>