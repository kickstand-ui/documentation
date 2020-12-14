---
{
    "description": "Kickstand UI's display utility classes provide a way for you to easily adjust responsive layouts.",
    "meta": [
        {
            "property": "og:title",
            "content": "Display Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/display.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's display utility classes provide a way for you to easily adjust responsive layouts."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/display.png"
        }
    ]
}
---

# Display

Kickstand UI's display utility classes provide a way for you to easily adjust responsive layouts.

## Classes

| Class                                             | CSS Rule                           |
| ------------------------------------------------- | ---------------------------------- |
| `display-block`                                   | `display: block;`                  |
| `display-flex` [more info](/layout/flex-box.html) | `display: flex;`                   |
| `display-inline`                                  | `display: inline;`                 |
| `display-inline-block`                            | `display: inline-block;`           |
| `display-inline-flex`                             | `display: inline-flex;`            |


<div class="my-xl">
    <div class="bg-light p-lg my-md display-block">display-block</div>
    <div class="bg-light p-lg my-md display-flex">display-flex</div>
    <div class="bg-light p-lg my-md display-inline-block">display-inline-block</div>
    <div class="bg-light p-lg my-md display-inline">display-inline</div>
    <div class="bg-light p-lg my-md display-inline-flex">display-inline-flex</div>
</div>

```html
<div class="bg-light p-lg my-md display-block">display-block</div>
<div class="bg-light p-lg my-md display-flex">display-flex</div>
<div class="bg-light p-lg my-md display-inline">display-inline</div>
<div class="bg-light p-lg my-md display-inline-block">display-inline-block</div>
<div class="bg-light p-lg my-md display-inline-flex">display-inline-flex</div>
```

## Screen Reader Only

The `sr-only` class is used to hide information that is intended only for screen readers from the layout of a rendered page.

<div class="my-xl text-xl">
    <a href="#cart-page">
        <ks-icon icon="cart"></ks-icon>
        <span class="sr-only">go to cart</span>
    </a>
</div>

```html
<a href="#cart-page">
    <ks-icon icon="cart"></ks-icon>
    <span class="sr-only">go to cart</span>
</a>
```

:::tip NOTE
You can also use `aria-label` to accomplish this task, but it can only be used for text descriptions and not markup.

Also, if you are relying on tools like Google Translate to provide localized content to your users, `aria-label` values will not be translated.
:::

## Full Width

If you need a container to ignore the width of the container it is in (like the [mega menu](./../components/dropdown.md)), you can add the `full-width` utility class to it and it will spann the full width of the browser window.

## Responsive Classes

You can also change the layout based on the user's screen size using the responsive variations of each class. By prefixing the class with the desired screen size (`xxs`-`xl`), you can adjust the behavior.

<div class="my-xl">
    <div class="bg-light p-lg my-md display-inline md:display-block">Display <code>inline</code> then <code>block</code> on <code>md</code> screen</div>
</div>

```html
<div class="display-inline md:display-block">Display <code>inline</code> then <code>block</code> on <code>md</code> screen</div>
```