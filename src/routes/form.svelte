<script>
import Form from '../components/form/Form.svelte'
import Input from '../components/form/Input.svelte'
import SubmitButton from '../components/form/SubmitButton.svelte'

const submit = ($fields, $errors, clear_form) => {
  console.log("Fields", $fields)
  console.log("Errors", $errors)
  alert("Thank you!")
}

const validate = ($fields, $errors) => {
  if ($fields.name.length < 5) {
    $errors.name = 'Your name is so short!'
    return false
  }
  return true
}
</script>

<style type="text/scss">
.address_form {
  margin-top: 1em;
  max-width: 30em;
  font-size: .8em;

  :global(form) {
    display: grid;
    grid-gap: 10px;
    grid-row-gap: 1.1em;
    grid-template-columns: 60% 15% 25%;
    grid-template-rows: auto;
    grid-template-areas:
      "full_name full_name full_name"
      "address address address"
      "city state zip"
      "save save save";

    :global(fieldset) {  /* display: grid doesn't work on fieldsets in chrome */
      display: contents;
    }

    :global(.field) {
      display: block;
      :global(label, input) {
        display: block;
        width: 100%; /* unsure why I need this? */ 
      }
    }
  }

  :global(.field.full_name) { grid-area: full_name; }
  :global(.field.address) { grid-area: address; }
  :global(.field.city) { grid-area: city; }
  :global(.field.state) { grid-area: state; }
  :global(.field.zip) { grid-area: zip; }
  :global(.buttons) { grid-area: save; }
}
</style>

<svelte:head>
	<title>Forms</title>
</svelte:head>

<div class="flow">
  <h1>Checkout</h1>
  <h2>Shipping</h2>
  <p>Please enter your address</p>
</div>

<div class="address_form">
  <Form submit={submit} validate={validate} fieldnames="{['name', 'address', 'city', 'state', 'zip']}">
    <fieldset slot="fieldset">
      <Input field_class="full_name" required id="name" label="Name" field="name" type="text" placeholder="John Doe"></Input>
      <Input field_class="address" required id="address" label="Address" field="address" type="text" placeholder="5 Main St"></Input>
      <Input field_class="city" required id="city" label="City" field="city" type="text" placeholder="Springfield"></Input>
      <Input field_class="state" required id="state" label="State" maxlength="2" field="state" type="text" placeholder="ZZ"></Input>
      <Input field_class="zip" required id="zip" label="Zip code" maxlength="5" field="zip" type="number" placeholder="00000"></Input>
      <div class="button">
        <SubmitButton text="Save"></SubmitButton>
      </div>
    </fieldset>
  </Form>
</div>