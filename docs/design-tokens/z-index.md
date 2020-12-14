---
{
    "description": "Kickstand UI is designed to be customizable to meet your needs. Update the design tokens to match your brand.",
    "meta": [
        {
            "property": "og:title",
            "content": "Z-Index Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI is designed to be customizable to meet your needs. Update the design tokens to match your brand."
        }
    ]
}
---

# Z-Index Design Tokens

This is usually on of the most obvious and yet most comical implementations to talk about. When asking developers how they handle z-indexes in their application, the most common answer is to set the value to `9999`. If that doesn't work, continue adding a `9` on the end until it does. Having a repeatable pattern and process for this should help remove this behavior as well as some of the unpredictability of your application.

To take advantage of these values there is a [z-index mixin](https://projectclarion.com/framework/documentation/mixins/z-index.html).

```scss
$z-indexes: (
    sub: -1,
    none: 0,
    xxs: 1,
    xs: 10,
    sm: 50,
    md: 100,
    lg: 200,
    xl: 500,
    trump: 99999,
) !default;
```

```css
:root {
    --ks-z-index-sub: -1;
    --ks-z-index-none: 0;
    --ks-z-index-xxs: 1;
    --ks-z-index-xs: 10;
    --ks-z-index-sm: 50;
    --ks-z-index-md: 100;
    --ks-z-index-lg: 200;
    --ks-z-index-xl: 500;
    --ks-z-index-trump: 99999;
}
```

## Usage

### SASS

```scss
.modal {
    // signature - z-index($size, $important: false)
    // returns   - z-index: {selected z-index CSS variable} !important (if set to "true")

    @include z-index(xl);
}
```

### CSS

```css
.modal {
    z-index: var(--ks-z-index-xl);
}
```
