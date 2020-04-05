<script>
    import { setContext, onMount } from 'svelte'
    import { writable } from 'svelte/store'
    import Error from './Error.svelte'
    export let fieldnames = []
    export let values = {}
    export let validate
    export let submit
    export let classname = ''

    if (!validate) {
      validate = () => true
    }
    
    let fields = writable({})
    let errors = writable({})
    let state = writable({
      saving: false,
      submitted: false,
      is_valid: undefined,
    })
    
    setContext('fields', {
      getFields: () => fields
    })
    setContext('errors', {
      getErrors: () => errors
    })
    setContext('state', {
      getState: () => state
    })
    
    const clean = async () => {
      $state.submitted = true
      clear_errors()
      $state.is_valid = validate($fields, $errors)
      if ($state.is_valid) {
        $state.saving = true
        await submit($fields, $errors, clear_form)
        $state.saving = false
      }
      $state.submitted = false
    }

    const cancel = () => {
      $state.submitted = false
      $state.is_valid = undefined
      $state.saving = false
    }

    const clear_form = () => {
      for(let f of fieldnames) {
        $errors[f] = null
        $fields[f] = null
      }
    }
    
    const clear_errors = () => {
      for(let f of fieldnames) {
        $errors[f] = null
      }
    }
    
    onMount(() => {
      if (fieldnames.length > 0) {
        for (let f of fieldnames) {
          $fields[f] = null
          $errors[f] = null
        }
      } else if (Object.keys(values).length > 0) {
        fieldnames = Object.keys(values)
        for (let [f, v] of Object.entries(values)) {
          $fields[f] = v
          $errors[f] = null
        }
      } else {
        throw new Error("Must pass either values or fieldnames")
      }
    })

  </script>
  
  <form on:submit|preventDefault={clean} class={classname}>
    <slot name="fieldset" fields={$fields} errors={$errors} state={$state}></slot>
    <Error message={$errors.save_error}></Error>
  </form>