---
{
    "description": "Kickstand UI's color utility classes make it easy to access colors from your color palette to set either the text or background color without any custom styles.",
    "meta": [
        {
            "property": "og:title",
            "content": "Color Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/colors.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's color utility classes make it easy to access colors from your color palette to set either the text or background color without any custom styles."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/colors.png"
        }
    ]
}
---

# Color Utility Classes

Kickstand UI's color utility classes make it easy to access colors from your color palette to set either the text or background color without any custom styles.

The syntax for these classes follow a simple pattern:

- If you are styling text, then use the `text` prefix. Otherwise, use the `bg` prefix for styling the background color.
- The color from the color pallet you would like to use - `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, or `dark`.
- The color variation - `lighter`, `light`, `base` (nothing), `dark`, or `darker`.

:::tip Note
Make sure you are testing for accessibility. Any of these colors below could provide a bad user experience if used in the wrong context.

To help with that, when using the background color utility classes, the text color will automatically be set to a color with a contrast that is [WCAG 2.0 AA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) compliant for small text.
:::

## Text Color

<div class="my-xxl">
    <ks-row>
        <ks-column>
            <h3 class="mt-md mb-none">Primary</h3>
            <div class="text-primary-lighter">text-primary-lighter</div>
            <div class="text-primary-light">text-primary-light</div>
            <div class="text-primary">text-primary</div>
            <div class="text-primary-dark">text-primary-dark</div>
            <div class="text-primary-darker">text-primary-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Secondary</h3>
            <div class="text-secondary-lighter">text-secondary-lighter</div>
            <div class="text-secondary-light">text-secondary-light</div>
            <div class="text-secondary">text-secondary</div>
            <div class="text-secondary-dark">text-secondary-dark</div>
            <div class="text-secondary-darker">text-secondary-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Success</h3>
            <div class="text-success-lighter">text-success-lighter</div>
            <div class="text-success-light">text-success-light</div>
            <div class="text-success">text-success</div>
            <div class="text-success-dark">text-success-dark</div>
            <div class="text-success-darker">text-success-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Info</h3>
            <div class="text-info-lighter">text-info-lighter</div>
            <div class="text-info-light">text-info-light</div>
            <div class="text-info">text-info</div>
            <div class="text-info-dark">text-info-dark</div>
            <div class="text-info-darker">text-info-darker</div>
        </ks-column>
        <div class="w-100"></div>
        <ks-column>
            <h3 class="mt-md mb-none">Warning</h3>
            <div class="text-warning-lighter">text-warning-lighter</div>
            <div class="text-warning-light">text-warning-light</div>
            <div class="text-warning">text-warning</div>
            <div class="text-warning-dark">text-warning-dark</div>
            <div class="text-warning-darker">text-warning-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Danger</h3>
            <div class="text-danger-lighter">text-danger-lighter</div>
            <div class="text-danger-light">text-danger-light</div>
            <div class="text-danger">text-danger</div>
            <div class="text-danger-dark">text-danger-dark</div>
            <div class="text-danger-darker">text-danger-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Light</h3>
            <div class="text-light-lighter">text-light-lighter</div>
            <div class="text-light-light">text-light-light</div>
            <div class="text-light">text-light</div>
            <div class="text-light-dark">text-light-dark</div>
            <div class="text-light-darker">text-light-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Dark</h3>
            <div class="text-dark-lighter">text-dark-lighter</div>
            <div class="text-dark-light">text-dark-light</div>
            <div class="text-dark">text-dark</div>
            <div class="text-dark-dark">text-dark-dark</div>
            <div class="text-dark-darker">text-dark-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Black / White</h3>
            <div class="text-black">text-black</div>
            <div class="text-white bg-dark">text-white</div>
        </ks-column>
    </ks-row>
</div>

```html
<h3 class="mt-md mb-none">Primary</h3>
<div class="text-primary-lighter">text-primary-lighter</div>
<div class="text-primary-light">text-primary-light</div>
<div class="text-primary">text-primary</div>
<div class="text-primary-dark">text-primary-dark</div>
<div class="text-primary-darker">text-primary-darker</div>

<h3 class="mt-md mb-none">Secondary</h3>
<div class="text-secondary-lighter">text-secondary-lighter</div>
<div class="text-secondary-light">text-secondary-light</div>
<div class="text-secondary">text-secondary</div>
<div class="text-secondary-dark">text-secondary-dark</div>
<div class="text-secondary-darker">text-secondary-darker</div>

<h3 class="mt-md mb-none">Success</h3>
<div class="text-success-lighter">text-success-lighter</div>
<div class="text-success-light">text-success-light</div>
<div class="text-success">text-success</div>
<div class="text-success-dark">text-success-dark</div>
<div class="text-success-darker">text-success-darker</div>

<h3 class="mt-md mb-none">Info</h3>
<div class="text-info-lighter">text-info-lighter</div>
<div class="text-info-light">text-info-light</div>
<div class="text-info">text-info</div>
<div class="text-info-dark">text-info-dark</div>
<div class="text-info-darker">text-info-darker</div>

<h3 class="mt-md mb-none">Warning</h3>
<div class="text-warning-lighter">text-warning-lighter</div>
<div class="text-warning-light">text-warning-light</div>
<div class="text-warning">text-warning</div>
<div class="text-warning-dark">text-warning-dark</div>
<div class="text-warning-darker">text-warning-darker</div>

<h3 class="mt-md mb-none">Danger</h3>
<div class="text-danger-lighter">text-danger-lighter</div>
<div class="text-danger-light">text-danger-light</div>
<div class="text-danger">text-danger</div>
<div class="text-danger-dark">text-danger-dark</div>
<div class="text-danger-darker">text-danger-darker</div>

<h3 class="mt-md mb-none">Light</h3>
<div class="text-light-lighter">text-light-lighter</div>
<div class="text-light-light">text-light-light</div>
<div class="text-light">text-light</div>
<div class="text-light-dark">text-light-dark</div>
<div class="text-light-darker">text-light-darker</div>

<h3 class="mt-md mb-none">Dark</h3>
<div class="text-dark-lighter">text-dark-lighter</div>
<div class="text-dark-light">text-dark-light</div>
<div class="text-dark">text-dark</div>
<div class="text-dark-dark">text-dark-dark</div>
<div class="text-dark-darker">text-dark-darker</div>

<h3 class="mt-md mb-none">Black / White</h3>
<div class="text-black">text-black</div>
<div class="text-white bg-dark">text-white</div>
```

## Background Color

<div class="my-xxl">
    <ks-row>
        <ks-column>
            <h3 class="mt-md mb-none">Primary</h3>
            <div class="p-sm my-md bg-primary-lighter">bg-primary-lighter</div>
            <div class="p-sm my-md bg-primary-light">bg-primary-light</div>
            <div class="p-sm my-md bg-primary">bg-primary</div>
            <div class="p-sm my-md bg-primary-dark">bg-primary-dark</div>
            <div class="p-sm my-md bg-primary-darker">bg-primary-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Secondary</h3>
            <div class="p-sm my-md bg-secondary-lighter">bg-secondary-lighter</div>
            <div class="p-sm my-md bg-secondary-light">bg-secondary-light</div>
            <div class="p-sm my-md bg-secondary">bg-secondary</div>
            <div class="p-sm my-md bg-secondary-dark">bg-secondary-dark</div>
            <div class="p-sm my-md bg-secondary-darker">bg-secondary-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Success</h3>
            <div class="p-sm my-md bg-success-lighter">bg-success-lighter</div>
            <div class="p-sm my-md bg-success-light">bg-success-light</div>
            <div class="p-sm my-md bg-success">bg-success</div>
            <div class="p-sm my-md bg-success-dark">bg-success-dark</div>
            <div class="p-sm my-md bg-success-darker">bg-success-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Info</h3>
            <div class="p-sm my-md bg-info-lighter">bg-info-lighter</div>
            <div class="p-sm my-md bg-info-light">bg-info-light</div>
            <div class="p-sm my-md bg-info">bg-info</div>
            <div class="p-sm my-md bg-info-dark">bg-info-dark</div>
            <div class="p-sm my-md bg-info-darker">bg-info-darker</div>
        </ks-column>
        <div class="w-100"></div>
        <ks-column>
            <h3 class="mt-md mb-none">Warning</h3>
            <div class="p-sm my-md bg-warning-lighter">bg-warning-lighter</div>
            <div class="p-sm my-md bg-warning-light">bg-warning-light</div>
            <div class="p-sm my-md bg-warning">bg-warning</div>
            <div class="p-sm my-md bg-warning-dark">bg-warning-dark</div>
            <div class="p-sm my-md bg-warning-darker">bg-warning-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Danger</h3>
            <div class="p-sm my-md bg-danger-lighter">bg-danger-lighter</div>
            <div class="p-sm my-md bg-danger-light">bg-danger-light</div>
            <div class="p-sm my-md bg-danger">bg-danger</div>
            <div class="p-sm my-md bg-danger-dark">bg-danger-dark</div>
            <div class="p-sm my-md bg-danger-darker">bg-danger-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Light</h3>
            <div class="p-sm my-md bg-light-lighter">bg-light-lighter</div>
            <div class="p-sm my-md bg-light-light">bg-light-light</div>
            <div class="p-sm my-md bg-light">bg-light</div>
            <div class="p-sm my-md bg-light-dark">bg-light-dark</div>
            <div class="p-sm my-md bg-light-darker">bg-light-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Dark</h3>
            <div class="p-sm my-md bg-dark-lighter">bg-dark-lighter</div>
            <div class="p-sm my-md bg-dark-light">bg-dark-light</div>
            <div class="p-sm my-md bg-dark">bg-dark</div>
            <div class="p-sm my-md bg-dark-dark">bg-dark-dark</div>
            <div class="p-sm my-md bg-dark-darker">bg-dark-darker</div>
        </ks-column>
        <ks-column>
            <h3 class="mt-md mb-none">Black / White / Transparent</h3>
            <div class="p-sm my-md bg-black">bg-black</div>
            <div class="p-sm my-md bg-white">bg-white</div>
            <div class="p-sm my-md bg-transparent">bg-transparent</div>
        </ks-column>
    </ks-row>
</div>

```html
<h3 class="mt-md mb-none">Primary</h3>
<div class="p-sm my-md bg-primary-lighter">bg-primary-lighter</div>
<div class="p-sm my-md bg-primary-light">bg-primary-light</div>
<div class="p-sm my-md bg-primary">bg-primary</div>
<div class="p-sm my-md bg-primary-dark">bg-primary-dark</div>
<div class="p-sm my-md bg-primary-darker">bg-primary-darker</div>

<h3 class="mt-md mb-none">Secondary</h3>
<div class="p-sm my-md bg-secondary-lighter">bg-secondary-lighter</div>
<div class="p-sm my-md bg-secondary-light">bg-secondary-light</div>
<div class="p-sm my-md bg-secondary">bg-secondary</div>
<div class="p-sm my-md bg-secondary-dark">bg-secondary-dark</div>
<div class="p-sm my-md bg-secondary-darker">bg-secondary-darker</div>

<h3 class="mt-md mb-none">Success</h3>
<div class="p-sm my-md bg-success-lighter">bg-success-lighter</div>
<div class="p-sm my-md bg-success-light">bg-success-light</div>
<div class="p-sm my-md bg-success">bg-success</div>
<div class="p-sm my-md bg-success-dark">bg-success-dark</div>
<div class="p-sm my-md bg-success-darker">bg-success-darker</div>

<h3 class="mt-md mb-none">Info</h3>
<div class="p-sm my-md bg-info-lighter">bg-info-lighter</div>
<div class="p-sm my-md bg-info-light">bg-info-light</div>
<div class="p-sm my-md bg-info">bg-info</div>
<div class="p-sm my-md bg-info-dark">bg-info-dark</div>
<div class="p-sm my-md bg-info-darker">bg-info-darker</div>

<h3 class="mt-md mb-none">Warning</h3>
<div class="p-sm my-md bg-warning-lighter">bg-warning-lighter</div>
<div class="p-sm my-md bg-warning-light">bg-warning-light</div>
<div class="p-sm my-md bg-warning">bg-warning</div>
<div class="p-sm my-md bg-warning-dark">bg-warning-dark</div>
<div class="p-sm my-md bg-warning-darker">bg-warning-darker</div>

<h3 class="mt-md mb-none">Danger</h3>
<div class="p-sm my-md bg-danger-lighter">bg-danger-lighter</div>
<div class="p-sm my-md bg-danger-light">bg-danger-light</div>
<div class="p-sm my-md bg-danger">bg-danger</div>
<div class="p-sm my-md bg-danger-dark">bg-danger-dark</div>
<div class="p-sm my-md bg-danger-darker">bg-danger-darker</div>

<h3 class="mt-md mb-none">Light</h3>
<div class="p-sm my-md bg-light-lighter">bg-light-lighter</div>
<div class="p-sm my-md bg-light-light">bg-light-light</div>
<div class="p-sm my-md bg-light">bg-light</div>
<div class="p-sm my-md bg-light-dark">bg-light-dark</div>
<div class="p-sm my-md bg-light-darker">bg-light-darker</div>

<h3 class="mt-md mb-none">Dark</h3>
<div class="p-sm my-md bg-dark-lighter">bg-dark-lighter</div>
<div class="p-sm my-md bg-dark-light">bg-dark-light</div>
<div class="p-sm my-md bg-dark">bg-dark</div>
<div class="p-sm my-md bg-dark-dark">bg-dark-dark</div>
<div class="p-sm my-md bg-dark-darker">bg-dark-darker</div>
```
