---
{
    "description": "Information on Kickstand UI's Media Query Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Media Query Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Media Query Design Tokens"
        }
    ]
}
---

# Media Query Design Tokens

The media query tokens and functions are used to help you make your site consistently responsive. Having consistency in these values will help provide a sense of stability in your site and simplify your development experience.

These are also the values used to create the responsive utility classes.

```scss
$media-queries: (
    xxs: 20rem, // 320px
    xs: 30rem,  // 480px
    sm: 48rem,  // 768px
    md: 62rem,  // 992px
    lg: 75rem,  // 1200px
    xl: 90rem,  // 1440px
    light-mode: light,
    dark-mode: dark,
    print: print,
);
```

:::tip NOTE
Unfortunately, CSS variables are not supported as media query values at this time, so no CSS variables are generated.
:::

## Usage

### SASS

In your style sheets:

```scss
.my-component {
    width: 25%;

    @include mq(md) {
        width: 50%;
    }

    @include mq(xs) {
        width: 100%;
    }

    @include mq(print) {
        display: none;
    }
}
```

In your markup, all of the responsive utility classes are prefixed with the media query size, followed my a colon (`:`), and finally the utility class - `{media query}:{utility class}`.

### Utility Classes

```html
<div class="my-component w-25 md:w-50 xs:w-100 print:hide">...</div>
```
