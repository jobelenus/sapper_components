<script>
  import { getContext } from 'svelte';
  export let text = 'Save';
  export let saving = false;
  export let onclick = null;

  if (!onclick) {
    onclick = () => {}
  }

  const linkclick = async (e) => {
    if (saving) return

    saving = true
    await onclick(e)
    saving = false
  }

  // For when used inside Form component
  let fields
  const {getFields} = getContext('fields') || {}  // fields may or may not exist
  if (getFields) {
    fields = getFields()
  }

  // when saving is false I am never clicked
  // when saving is true leave my clicked value
  let i_was_clicked = false;
  $: i_was_clicked = saving? i_was_clicked : false

  const buttonclick = (e) => {
    i_was_clicked = true
    onclick(e)
  }
</script>

<button type="submit" on:click="{buttonclick}" disabled={saving}>
  {#if saving && i_was_clicked}
    Saving
  {/if}
  {text}
</button>