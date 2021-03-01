---
{
    "description": "The Kickstand UI icon library is a compilation of commonly used icons for applications and websites.",
    "meta": [
        {
            "property": "og:title",
            "content": "Iconography - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI icon library is a compilation of commonly used icons for applications and websites."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        }
    ]
}
---

# Iconography

<IconsFilter />

## About

The Kickstand UI icon library is a compilation of commonly used icons for applications and websites. All icons are SVGs to improve performance, accessibility, and provide flexible implementation.

The icons were developed using the following guidelines:

- 24x24 Grid
- 1.5 stroke width
- 1.5 minimum negative space between elements
- fills and strokes inherit from the current color

The icons were developed in [Adobe XD](https://www.adobe.com/products/xd.html) and the file is available for [download here](https://github.com/break-stuff/kickstand-ui/blob/master/kickstand-ui_icons.xd).

:::tip Note
The brand-specific icons (facebook, twitter, etc.) did not follow all of these guidelines. Every effort was made to make sure they were consistent with their existing brand guidelines.
:::

## Animated Icons

There are a few animated icons that have been created to help convey loading states to your users. These icons are also available in the [loading component](./loading.md) with some additional features.

<div class="my-xl text-lg">
    <ks-icon icon="loading_ring_spinner" class="mr-lg" />
    <ks-icon icon="loading_circle_spinner" class="mr-lg" />
    <ks-icon icon="loading_ellipsis_pulse" class="mr-lg" />
    <ks-icon icon="loading_ellipsis_typing" class="mr-lg" />
</div>

```html
<ks-icon icon="loading_ring_spinner" />
<ks-icon icon="loading_circle_spinner" />
<ks-icon icon="loading_ellipsis_pulse" />
<ks-icon icon="loading_ellipsis_typing" />
```
