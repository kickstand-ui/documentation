---
{
    "description": "Information on Kickstand UI's Font Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Font Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Font Design Tokens"
        }
    ]
}
---

# Font Design Tokens

## Base Font Size

The will be the default base font size applied to the `body` element.

```scss
$font-size-base: 16px;
```

```css
:root {
    --ks-font-size-base: 16px;
}
```

:::tip NOTE
This actually controls a lot more that just the font size. Most of the sizing and spacing use [CSS rem units](https://www.sitepoint.com/understanding-and-using-rem-units-in-css) which are based off of the font size set on the `body` element, so increasing or decreasing this value will also cause those values to increase or decrease as well.
:::

### Usage

This really only should be used _once_ on the `body` element. Updating the token in SASS will automatically update the CSS variable.

```css
html,
body {
    font-size: var(--ks-font-size-base);
}
```

## Font Families

There are 3 default font types set up to start out with (`accent`, `base`, and `monospace`). This should usually be more than enough for a website or application. If you feel like you need more font families in your project than this, feel free to add them, but do so carefully. Having all of those fancy fonts on your site may look nice, but they come at a cost (both for performance and usability).

For performance reasons, the default values that have been set for these variables are system fonts. For further reading on this, check out Marcin Wichary's excellent [Smashing Magazine article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

| Type      | Description                                |
| --------- | ------------------------------------------ |
| Accent    | This is primarily used for things like headings or blockquotes. This should help those pieces of your design stand out from the rest of your content.                                                               |
| Base      | This is the default font for your site. If it is not text that should stand out more than other text, it should be using this font. This font should be simple and easy to read at both large and small font sizes. |
| Monospace (optional) | If you are creating a tutorial site that has code snippets or special call-out text, this font is an excellent way to help highlight those parts of your application. This is an _optional_ font and most sites will not need it.                                           |

```scss
$fonts: (
    accent: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
);
```

```css
:root {
    --ks-font-accent: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --ks-font-base: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --ks-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

### Usage

#### SASS

There is a SASS mixin to add the appropriate rules and variables to your code.

```scss
// signature - font($font: base, $important: false)
// returns   - font-family: {selected font CSS variable} !important (if set to "true")
body {
    @include font(base);
}

// using the $important value - should rarely be used
h1 {
    @include font(accent, true);
}
```

#### CSS

```css
body {
    font-family: var(--ks-font-base);
}
```

## Font Sizes

The default font sizes are `xxs-xxl`. As mentioned before, they use `rem`'s for the unit of measure. This is to provide proper scaling when the user's browser default font size is increased or they zoom in and out or adjust their default font size.

```scss
$font-sizes: (
    xxs: 0.75rem, // 12px
    xs: 0.875rem, // 14px
    sm: 1rem,     // 16px
    md: 1.25rem,  // 30px
    lg: 1.5rem,   // 24px
    xl: 2rem,     // 32px
    xxl: 3rem     // 48px,
);
```

```css
:root {
    --ks-font-size-xxs: 0.75rem;
    --ks-font-size-xs: 0.875rem;
    --ks-font-size-sm: 1rem;
    --ks-font-size-md: 1.25rem;
    --ks-font-size-lg: 1.5rem;
    --ks-font-size-xl: 2rem;
    --ks-font-size-xxl: 3rem;
}
```

### Usage

#### SASS

```scss
// signature - font-size($size, $important: false)
// returns   - font-size: {selected font-size CSS variable} !important (if set to "true")

h1 {
    @include font-size(xxl);
}

// this will add the `!important` attribute to the rule
.text-xxs {
    @include font-size(xxs, true);
}
```

#### CSS

```css
p {
    font-size: var(--ks-font-size-sm);
}
```
