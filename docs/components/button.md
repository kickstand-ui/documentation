---
{
    "description": "Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons.",
    "meta": [
        {
            "property": "og:title",
            "content": "Button Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        },
        {
            "property": "og:description",
            "content": "Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        }
    ]
}
---

# Button

Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons.

<ks-button class="mb-sm">Default Button</ks-button>

## Colors

<div class="my-xl">
    <ks-button color="primary" class="mb-sm">primary</ks-button>
    <ks-button color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button color="success" class="mb-sm">success</ks-button>
    <ks-button color="info" class="mb-sm">info</ks-button>
    <ks-button color="warning" class="mb-sm">warning</ks-button>
    <ks-button color="danger" class="mb-sm">danger</ks-button>
    <ks-button color="light" class="mb-sm">light</ks-button>
    <ks-button color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button color="primary">primary</ks-button>
<ks-button color="secondary">secondary</ks-button>
<ks-button color="success">success</ks-button>
<ks-button color="info">info</ks-button>
<ks-button color="warning">warning</ks-button>
<ks-button color="danger">danger</ks-button>
<ks-button color="light">light</ks-button>
<ks-button color="dark">dark</ks-button>
```

## Sizes

<div class="my-xl">
    <ks-button class="mb-sm" size="xs">x-small button</ks-button>
    <ks-button class="mb-sm" size="sm">small button</ks-button>
    <ks-button class="mb-sm" size="md">medium button</ks-button>
    <ks-button class="mb-sm" size="lg">large button</ks-button>
    <ks-button class="mb-sm" size="xl">x-large button</ks-button>
</div>

```html
<ks-button size="xs">x-small button</ks-button>
<ks-button size="sm">small button</ks-button>
<ks-button size="md">medium button</ks-button>
<ks-button size="lg">large button</ks-button>
<ks-button size="xl">x-large button</ks-button>
```

## Display

### Solid (default)

<div class="my-xl">
    <ks-button color="primary" class="mb-sm">primary</ks-button>
    <ks-button color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button color="success" class="mb-sm">success</ks-button>
    <ks-button color="info" class="mb-sm">info</ks-button>
    <ks-button color="warning" class="mb-sm">warning</ks-button>
    <ks-button color="danger" class="mb-sm">danger</ks-button>
    <ks-button color="light" class="mb-sm">light</ks-button>
    <ks-button color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button color="primary">primary</ks-button>
<ks-button color="secondary">secondary</ks-button>
<ks-button color="success">success</ks-button>
<ks-button color="info">info</ks-button>
<ks-button color="warning">warning</ks-button>
<ks-button color="danger">danger</ks-button>
<ks-button color="light">light</ks-button>
<ks-button color="dark">dark</ks-button>
```

### Hollow

<div class="my-xl">
    <ks-button display="hollow" color="primary" class="mb-sm">primary</ks-button>
    <ks-button display="hollow" color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button display="hollow" color="success" class="mb-sm">success</ks-button>
    <ks-button display="hollow" color="info" class="mb-sm">info</ks-button>
    <ks-button display="hollow" color="warning" class="mb-sm">warning</ks-button>
    <ks-button display="hollow" color="danger" class="mb-sm">danger</ks-button>
    <ks-button display="hollow" color="light" class="mb-sm">light</ks-button>
    <ks-button display="hollow" color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button display="hollow" color="primary">primary</ks-button>
<ks-button display="hollow" color="secondary">secondary</ks-button>
<ks-button display="hollow" color="success">success</ks-button>
<ks-button display="hollow" color="info">info</ks-button>
<ks-button display="hollow" color="warning">warning</ks-button>
<ks-button display="hollow" color="danger">danger</ks-button>
<ks-button display="hollow" color="light">light</ks-button>
<ks-button display="hollow" color="dark">dark</ks-button>
```

### Clear

<div class="my-xl">
    <ks-button display="clear" color="primary" class="mb-sm">primary</ks-button>
    <ks-button display="clear" color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button display="clear" color="success" class="mb-sm">success</ks-button>
    <ks-button display="clear" color="info" class="mb-sm">info</ks-button>
    <ks-button display="clear" color="warning" class="mb-sm">warning</ks-button>
    <ks-button display="clear" color="danger" class="mb-sm">danger</ks-button>
    <ks-button display="clear" color="light" class="mb-sm">light</ks-button>
    <ks-button display="clear" color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button display="clear" color="primary">primary</ks-button>
<ks-button display="clear" color="secondary">secondary</ks-button>
<ks-button display="clear" color="success">success</ks-button>
<ks-button display="clear" color="info">info</ks-button>
<ks-button display="clear" color="warning">warning</ks-button>
<ks-button display="clear" color="danger">danger</ks-button>
<ks-button display="clear" color="light">light</ks-button>
<ks-button display="clear" color="dark">dark</ks-button>
```

### Link

<div class="my-xl">
    <ks-button display="link" color="primary" class="mb-sm">primary</ks-button>
    <ks-button display="link" color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button display="link" color="success" class="mb-sm">success</ks-button>
    <ks-button display="link" color="info" class="mb-sm">info</ks-button>
    <ks-button display="link" color="warning" class="mb-sm">warning</ks-button>
    <ks-button display="link" color="danger" class="mb-sm">danger</ks-button>
    <ks-button display="link" color="light" class="mb-sm">light</ks-button>
    <ks-button display="link" color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button display="link" color="primary">primary</ks-button>
<ks-button display="link" color="secondary">secondary</ks-button>
<ks-button display="link" color="success">success</ks-button>
<ks-button display="link" color="info">info</ks-button>
<ks-button display="link" color="warning">warning</ks-button>
<ks-button display="link" color="danger">danger</ks-button>
<ks-button display="link" color="light">light</ks-button>
<ks-button display="link" color="dark">dark</ks-button>
```

:::warning
The `solid` display option will automatically select and appropriate contrasting color to meet the WCAG 2.0 AA standard, but the other are up to your discretion. Please make sure you use these cautiously and test them for sufficient color contrast.
:::

## States

### Disabled

<ks-button disabled class="mt-xxl">Disabled Button</ks-button>

```html
<ks-button disabled>Disabled Button</ks-button>
```

### Loading

You can put a button in a loading state by setting the `loading` property to `true`.

<div class="my-xl">
    <ks-button loading>Loading Button</ks-button>
</div>

```html
<ks-button loading>Loading Button</ks-button>
```

The example below shows how you can set it programmatically.

<div class="my-xl">
    <ks-button id="loading_button">Click To Load</ks-button>
    <script>
        (function (){
            let loadingButton = document.getElementById('loading_button');
            loadingButton.addEventListener('click', function () {
                loadingButton.loading = true;
                setTimeout(function () {
                    loadingButton.loading = false;
                }, 3000);
            });
        })();
    </script>
</div>

```html
<ks-button id="loading_button">Click To Load</ks-button>

<script>
    let $loadingButton = document.getElementById('loading_button');

    $loadingButton.addEventListener('click', () => {
        $loadingButton.loading = true;
        setTimeout(() => $loadingButton.loading = false, 3000);
    });

    // or with DOM utilities
    let $loadingButton = $('#loading_button');

    $loadingButton.on('click', () => {
        $loadingButton.loading = true;
        setTimeout(() => $loadingButton.loading = false, 3000);
    });
</script>
```
:::tip Note
If a button is loading, it is also disabled.
:::

You also have the same controls available that you have with the [loading overlay](./loading.md#loading-overlay) component using the following props: `loading-theme`, `loading-message`, `show-loading-message`, and `loading-icon`.

## HREF

If the `href` property is populated, it will change the behavior of therefore change semantics of the markup. Buttons are for performing actions and anchors are for linking to content.

<ks-button class="mt-xxl">I do something</ks-button>

```html
<ks-button>I do something</ks-button>

<!-- the rendered HTML -->
<ks-button class="pointer hydrated">
    ...
    <button aria-haspopup="false" type="button" class="button primary solid md">I do something</button>
</ks-button>
```

<ks-button href="#" class="mt-xxl">I go somewhere</ks-button>

```html
<ks-button href="#href">I go somewhere</ks-button>

<!-- the rendered HTML -->
<ks-button href="#" class="pointer hydrated">
    <a class="button primary solid md" href="#">I go somewhere</a>
</ks-button>
```

## Target

The `target` property behaves the same as the standard [HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). When used, the `<ks-button>` component will automatically add `rel="noreferrer noopener"` for performance and security purposes.

## Accessibility

There are a number of accessibility features built in to the button to promote the a great user experience for all of your users.

- For solid buttons, basic background and text color contrast is built-in to promote readability.
- Automatic tag selection for links vs buttons promotes good semantics.
- The `hide-text` property hides the text in the UI, but still makes it available for screen readers.
- Additional `aria` attributes are available through properties (ex - `controls`, `described-by`, `haspopup`, etc.) to provide you with the controls you need to make your application more accessible.

## Properties

| Property        | Attribute        | Description                                                                                                       | Type                                                                                               | Default     |
| --------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `color`         | `color`          | button color based on theme palette                                                                               | `"danger"`, `"dark"`, `"info"`, `"light"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` |
| `controls`      | `controls`       | adds `aria-controls` attribute to button element                                                                  | `string`                                                                                           | `undefined` |
| `buttonClass`      | `button-class`      | passes class directly to button element                                                                           | `string`                                                                                           | `''`        |
| `cssClass`      | `css-class`      | (deprecated - use `button-class`) passes class directly to button element                                                                           | `string`                                                                                           | `''`        |
| `describedBy`   | `described-by`   | adds `aria-describedby` attribute to button element                                                               | `string`                                                                                           | `undefined` |
| `disabled`      | `disabled`       | enables/disables button                                                                                           | `boolean`                                                                                          | `undefined` |
| `display`       | `display`        | controls the display type                                                                                         | `"clear"`, `"hollow"`, `"link"`, or `"solid"`                                                      | `'solid'`   |
| `expanded`      | `expanded`       | controls `aria-expanded` attribute on the button element                                                          | `boolean`                                                                                          | `false`     |
| `haspopup`      | `haspopup`       | adds `aria-haspopup` attribute to button element                                                                  | `boolean`                                                                                          | `false`     |
| `href`          | `href`           | adding this value will convert the button to a link                                                               | `string`                                                                                           | `undefined` |
| `loading`       | `loading`        | enabling this will show the loading icon and disable the button                                                   | `boolean`                                                                                          | `undefined` |
| `size`          | `size`           | controls the size of the button                                                                                   | `"md"`, `"lg"`, `"sm"`, `"xl"`, or `"xs"`                                                          | `'md'`      |
| `tabIndex`      | `tab-index`      | adds a `tabindex` attribute on the button element                                                                 | `number`                                                                                           | `undefined` |
| `target`        | `target`         | adds `target` [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) to anchor tags | `string`                                                                                           | `undefined` |
| `type`          | `type`           | controls the button `type` attribute                                                                              | `"button"`, `"reset"`, or `"submit"`                                                               | `'button'`  |
| `loadingTheme`          | `loading-theme`           | controls theme of loading overlay  | `"light"`, `"dark"` | `'light'`  |
| `loadingMessage`          | `loading-message`           | controls message displayed when loading overlay is shown  | `string` | `Loading...`  |
| `showLoadingMessage`          | `show-loading-message`           | controls whether or not the loading message is visually displayed  | `boolean` | `false`  |
| `loadingIcon`          | `loading-icon`           | controls which loading icon is displayed  | `string` | `loading_circle_spinner`  |
