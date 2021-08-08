---
{
    "description": "Using Kickstand UI to add a Password Confirmation Form to your site.",
    "meta": [
        {
            "property": "og:title",
            "content": "Adding Password Confirmation Form To your Site - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        },
        {
            "property": "og:description",
            "content": "Using Kickstand UI to add a Password Confirmation Form to your site."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        }
    ]
}
---

# Password Confirmation Form

In this guide you will see how to easily create forms, add validation, and get form data.

:::tip NOTE
If you haven't already read the [Contact Form Guide](contact-form.md), please read it before you continue so you have a better idea of how forms are submitted and validated.
:::

## Create a Password Confirmation Form

The contact form will have the following requirements:

| Field                | Requirements                                       |
| -------------------- | -------------------------------------------------- |
| Username             | required                                           |
| Password             | required, must be at least 8 characters, and must have 1 special character     |
| Confirm Password     | required, must match Password field                |

Translating those requirements into code is actually pretty straight forward with Kickstand UI.

```html
<ks-form id="confirm_password">
    <ks-form-field 
        label="Username" 
        required>
    </ks-form-field>
    <ks-form-field 
        label="Password" 
        type="password" 
        help-text="Must be at least 8 characters and include 1 special character" 
        minlength="8"
        pattern="^.*(?=.*[a-zA-Z])(?=.*[!#$%&?]).*$" 
        pattern-error-message="You are missing a special character" 
        required>
    </ks-form-field>
    <ks-form-field 
        label="Confirm Password" 
        type="password"
        required>
    </ks-form-field>
    <ks-button type="submit">Submit</ks-button>
</ks-form>
```

<div class="my-xxxl">
    <ks-form>
        <ks-form-field
            label="Username"
            required>
        </ks-form-field>
        <ks-form-field
            label="Password"
            type="password"
            help-text="Must be at least 8 characters and include 1 special character"
            minlength="8"
            pattern="^.*(?=.*[a-zA-Z])(?=.*[!#$%&?]).*$"
            pattern-error-message="You are missing a special character"
            required>
        </ks-form-field>
        <ks-form-field
            label="Confirm Password"
            type="password"
            required>
        </ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>
</div>

## Submitting the Form

Adding custom validation to the Confirm Password is fairly straight forward. We will execute some custom logic in our `submitted` event listener and update the UI to reflect the validation.

The first thing we should do is add add an event listener for the form's `submitted` event.

```js
$('#confirm_password').on('submitted', (event) => {
    const confirmPasswordFormData = event.detail;

    // do something cool!
});
```

:::tip NOTE
This guide uses the Kickstand UI [DOM utilities](../utilities/dom-utilities.md) to help keep the code clean and easy to read.
:::

The `formData` is an object that has the form field data as well as some validation information.

```js
{
    formFieldData: [...],
    isValid: false
}
```

`isValid` indicates the overall validation of the form and `formFieldData` contains the values and individual validation information about each of the input fields.

```js
{
    isValid: false,
    name: "username",
    validity: {...},
    value: "Some value"
}
```

## Validate the Form

Now that we are listening for the `submitted` event and have the form data, let's verify that the form passed the initial validation we added to the fields before adding custom our validation. If it's not, let's skip the custom validation check.

```js
const $confirmPasswordForm = $('#confirm_password');
$confirmPasswordForm.on('submitted', (event) => {
    const confirmPasswordFormData = event.detail;

    if(!confirmPasswordFormData.isValid)
        return;

    // do something cool!
});
```

## Custom Validation

If the form is valid, let's check to see if the `Password` and `Confirm Password` field values match. Here we will select the field by the `name` property. The `name` property is auto-generated based on the form label. If you are worried about this changing, you can set the name manually by setting the `name` property on the `<ks-form-field>` component.

```js
const $confirmPasswordForm = $('#confirm_password');
$confirmPasswordForm.on('submitted', (event) => {
    const confirmPasswordFormData = event.detail;

    if (!confirmPasswordFormData.isValid) 
        return;

    const formData = confirmPasswordFormData.formData;
    const password = formData.password;
    const confirmPassword = formData["confirm-password"];

    if(password === confirmPassword) {
        // submit the form
    } else {
        // let the user know they don't match
    }
});
```

## Update Form

We won't go over submitting the form today, so we will just add a quick `alert` with the Username to show the form was completed and reset the form validation state. However, we should let the user know if the passwords don't match. We can do this with 3 simple steps:

1. Set the form to `invalid`
2. Update the `Confirm Password` field's error message to something meaningful
3. Set the `Confirm Password` field to invalid

```js
if (password === confirmPassword) {
    $('#new_username').innerText = formData.username;
    $('#welcome_message').hidden = false;
    $confirmPasswordForm.hidden = true;
} else {
    const $confirmPasswordField = $("#confirm_password");
    $confirmPasswordForm.invalid = true; // 1
    $confirmPasswordField.defaultErrorMessage = "Your passwords do not match"; // 2
    $confirmPasswordField.invalid = true; // 3
}
```

## Complete Code and Demo

<p class="codepen" data-height="700" data-default-tab="html,result" data-slug-hash="dyWpBbR" data-editable="true" data-user="break-stuff" style="height: 700px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/dyWpBbR">
  Kickstand UI Sign Up Form</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Final Code

```html
<h1 class="text-center text-lg">Kickstand UI Sign-Up Form</h1>
<p id="welcome_message" class="text-xl text-center mt-xxl" hidden>Welcome to the app, <span id="new_username"></span>!</p>
<ks-form class="w-content mx-auto my-xxl" id="confirm_password_form">
    <ks-form-field
        id="username"
        label="Username"
        required>
    </ks-form-field>
    <ks-form-field
        id="password"
        label="Password"
        type="password"
        help-text="Must be at least 8 characters and include 1 special character"
        minlength="8"
        pattern="^.*(?=.*[a-zA-Z])(?=.*[!#$%&?]).*$"
        pattern-error-message="You are missing a special character"
        required>
    </ks-form-field>
    <ks-form-field
        id="confirm_password"
        label="Confirm Password"
        type="password"
        required>
    </ks-form-field>
    <ks-button type="submit">Submit</ks-button>
</ks-form>
  ```

```js
const $confirmPasswordForm = $("#confirm_password_form");
$confirmPasswordForm.on("submitted", (event) => {
    const confirmPasswordFormData = event.detail;

    if (!confirmPasswordFormData.isValid) 
        return;

    const formData = confirmPasswordFormData.formData;
    const password = formData.password;
    const confirmPassword = formData["confirm-password"];

    if (password === confirmPassword) {
        $('#new_username').innerText = formData.username;
        $('#welcome_message').hidden = false;
        $confirmPasswordForm.hidden = true;
    } else {
        const $confirmPasswordField = $("#confirm_password");
        $confirmPasswordForm.invalid = true;
        $confirmPasswordField.defaultErrorMessage = "Your passwords do not match";
        $confirmPasswordField.invalid = true;
    }
});
```
