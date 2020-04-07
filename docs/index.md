# How I Did It

## Adding sass support for rollup

See the second commit hash: 24cd5e0

## Run on Express instead of Polka

See this commit hash: fdb6d16

## Different pages with different layouts

Inside `routes/` there is a `_layout.svelte` file. That represents the layout for the entire application.
Directories inside `routes/` can have their own `_layout.svelte` file, but that is a "sub-layout", the "outer" layout still applies.

Under most circumstances this is what you want. However, if you truly want something like your login page to have a different layout
you have two options, First you can do what I did:
```
  {#if segment === 'login'}
  <slot></slot>
  {:else}
  <Nav {segment} {left} {top} {navitems}/>

  <main class:center>
    <slot></slot>
  </main>
  {/if}
```
A simple conditional inside the main layout gives you an empty slot for the Login page. That means your `login/_layout.svelte` file can host your different-looking layout. And if you're not going to the login page, render the markup for our regular layout.

I chose this direction because I would only have one alternate layout; for the login page.

The second option that I could have taken; inside `routes/_layout.svelte` just put an empty slot. Create a `routes/app/` folder, and move all my routes that I want on the "regular" layout to that folder. This means you would not need any conditionals at all in your `_layout.svelte` file. But it does mean that every URL would begin with `app/` (e.g. `app/blog` and `app/about`). Those are the tradeoffs you need to decide between.

## Push session data to the client

Inside your `server.js` file you can add:
```
app.use(cookieParser())
app.use(session({...}))  // I assume you know how to set up express-session

app.use((req, res, next) => {
  if (typeof req.session.user_data === 'undefined') {
    req.session.user_data = {}
  }
  next()
})

app.use(sapper.middleware({
  session: (req, res) => ({
    user_data: req.session.user_data  // this key in the object needs to match prefetch destructure!
  })
}))
```

Inside the route .svelte file you want the data:
```
<script context="module">
  export function preload(page, { user_data }) {  // this matches the sapper.middleware object key
    return { user_data };
  };
</script>

<script>
  export let user_data;  // the framework fills this data from the above module preload
</script>
```

### Enforce authentication for pages

On my outermost `layout.svelte`, which gets run for every request:
```
  onMount(() => {
    if (!user_data && window.location.pathname != '/login') {
      window.location = '/login'
    }
  })
```

On my `login/index.svelte` page:
```
import { stores } from '@sapper/app';
const { session } = stores();

// once you have a successful login with an identity provider
session.set({ user_data: ... });
window.location = '/'
```

In this case, I'm not using any outside provider, you can see `login/index.json`:
```
export function post(req, res, next) {
  req.session.user_data = { user: { email: req.body.email } }
  res.json(req.session.user_data).end()
}
```

There is one downside to this approach that I am hopefuly I can work around.
Any page will fully render before the login redirect happens. So you will see a flash of content
and then a redirect. This is not a great experience. I am looking into being able to redirect
from the express layer.