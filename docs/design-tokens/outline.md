---
{
    "description": "Information on Kickstand UI's Outline Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Outline Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Outline Design Tokens"
        }
    ]
}
---

# Outline Design Tokens

These are the settings for the default outline style when focused on elements.

```scss
$outline: (
    style: dashed,
    size: xxxs, // from $spacing-sizes
    color: dark,
    offset: xxs // from $spacing-sizes,
) !default;
```

```css
:root {
    --ks-default-outline: dashed var(--ks-spacing-size-xxxs) rgba(var(--ks-color-dark-base), 1);
    --ks-default-outline-offset: var(--ks-spacing-size-xxs);
}
```

### Usage

```scss
button {
    &:focus {
        @include default-outline();
    }
}
```

```css
button:focus {
    outline: var(--ks-default-outline);
    outline-offset: var(--ks-default-outline-offset);
}
```

You can also override the default values, by passing parameters into the mixin:

```scss
// outline($style, $size, $offset, $color, $variant, $opacity, $important)

button {
    &:focus {
        @include outline(solid, xxs, none, dark, lighter, 0.75, true);
    }
}
```
