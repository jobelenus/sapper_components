<script>
  import { getContext } from 'svelte';
  import Error from './Error.svelte'
  export let field
  export let field_class
  export let label
  export let no_label = false

  const {getFields} = getContext('fields')
  const fields = getFields()
  const {getErrors} = getContext('errors')
  const errors = getErrors()
  const {getState} = getContext('state')
  const state = getState()
  
  let attrs = Object.assign({}, $$props)
  for(let k in $$props) {
    if (k.startsWith('$')) {
      delete attrs[k]
    }
  }
  delete attrs['field']
  delete attrs['field_class']
</script>

<div class="field {field_class}">
  {#if !no_label}
  <label for={attrs.id}>{label}</label>
  {/if}
  <input {...attrs} bind:value={$fields[field]}>
  <slot name="addon" state={$state}></slot>
  <Error message={$errors[field]}/>
</div>