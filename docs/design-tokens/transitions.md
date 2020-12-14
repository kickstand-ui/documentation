---
{
    "description": "Kickstand UI is designed to be customizable to meet your needs. Update the design tokens to match your brand.",
    "meta": [
        {
            "property": "og:title",
            "content": "Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI is designed to be customizable to meet your needs. Update the design tokens to match your brand."
        }
    ]
}
---

# Transition Design Tokens

This set of values is where you can keep track of your transition speeds for your application. Having consistent transitions throughout you application can really give it a polished look and feel.

```scss
$transitions: (
    xslow: 2s,
    slow: 1s,
    med: 0.5s,
    fast: 0.3s,
    xfast: 0.1s,
) !default;
```

```css
:root {
    --ks-transition-xslow: 2s;
    --ks-transition-slow: 1s;
    --ks-transition-med: 0.5s;
    --ks-transition-fast: 0.3s;
    --ks-transition-xfast: 0.1s;
}
```

## Usage

### SASS

```sass
// Signature - transition($property: all, $speed: fast, $timing-function: ease-in-out, $important: false)
// Returns -   transition: $property var(--ks-transition-#{$speed}) $timing-function !important (if $important is true)

.button {
    @include shadow(xs);
    @include transition(box-shadow);

    &:focus,
    &:hover:not(:disabled) {
        @include shadow(md);
        @include transition(box-shadow);
    }
}
```

### CSS

```css
.button {
    box-shadow: var(--ks-shadow-sm);
    transition: box-shadow var(--ks-transition-fast) ease-in-out;
}

.button:focus,
.button:hover:not(:disabled) {
    box-shadow: var(--ks-shadow-md);
    transition: box-shadow var(--ks-transition-fast) ease-in-out;
}
```
