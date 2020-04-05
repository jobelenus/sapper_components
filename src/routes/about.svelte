<svelte:head>
	<title>About</title>
</svelte:head>

<article class="flow">
  <h1>About this site</h1>
  <h2>What is this?</h2>
  <p>
    I am putting this repository together as an example of what modern front-end development can look like.
    I am bringing together the best pieces out there into one place. I want to share how easy it can be to get
    results with the miminal amount of code. I am not a designer, so this probably won't look "beautiful". But the code will be.
  </p>
  <p>
    This is not a traditional component library. I do not expect anyone to install this and import anything from it.
    I've worked with most component libraries over the decades, and they get in your way more than they help.
  </p>
  <p>
    I'm doing this because I am not a professional designer. I'm a developer who realizes that the designers have a lot
    to teach us, because they are very good programmers too. I want to show other developers that CSS is the best tool
    we have in our toolbox, not JavaScript, and that we've been using it wrong.
  </p>
  <h3>Why am I doing this?</h3>
  <p>
    I am doing this because I don't think we need bootstrap anymore.
    I am doing this because I don't think we need pages that weigh 5mb.
    I am doing this because I don't think we need files with 2000 lines of CSS.
    I am doing this beacuse I believe Svelte is the future, and I want to help make it the future.
  </p>
  <p>
    This is a starting example to show people how <strong>simple</strong> components can be. That they don't need to be
    giant black boxes that are difficult to comprehend just how they work. And they certainly don't need to be fully powered
    by JavaScript.
  </p>
  <h3>How am I doing this?</h3>
  <p>
    I started with the sapper-template project.
    I added sass pre-processing, if you're interested in doing that for your project see the 2nd commit.
    I added a CSS reset, color palette, and typography global styles.
  </p>
  <p>
    Then I went to work on creating a layout with Flexbox that can swap orientation based on one JS variable.
    I updated the Nav component to be more what developers are used to. I've tried to encapsulate what <i>should be</i>
    and let everything else that <i>shouldn't be</i> cascade.
  </p>
  <p>
    Then I created simple mixins for common look &amp; feel elements like rounded borders and drop shadows.
    I added a simple form component.
    I added a Steps component to do things in a specific order, like a "wizard".
    I created a login page with the steps component (for the curious, I am mimicing Mailgun's login flow).
  </p>
</article>