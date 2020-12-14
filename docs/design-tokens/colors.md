---
{
    "description": "Information on Kickstand UI's Color Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Color Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Color Design Tokens"
        }
    ]
}
---

# Color Design Tokens

Colors are easily one of the most complex things about your site. When choosing and working with colors there are so many things to consider in order to make an effective user interface including:

- Trying to capture your brand and make sure it is well represented in your design
- Using the right colors to convey the right message (because colors have meaning)
- Ensuring your site is accessible to all users

Kickstand UI is designed to help you with all of that! It will generate a color palette based on the colors you specify in the SASS tokens as well as creating contrasting color values to ensure your applications are accessible for all of your users.

## Color Palette

<ColorList />

## Colors

### SASS

```scss
$colors: (
    "primary": #2c5374,
    "secondary": #ac3f00,
    "success": #669c1f,
    "info": #509bce,
    "warning": #e1a900,
    "danger": #c70000,
);
```

:::tip NOTE
The `light` and `dark` color value (which make up the grayscale colors of your palette) are created based on your `primary` color by default. You do have the option of overriding that by defining your own `light` and `dark` colors.
:::

### CSS

```css
:root {
    --ks-color-primary-base: 44,83,116;
    --ks-color-primary-base-text: 255,255,255;
    --ks-color-primary-light: 55,104,146;
    --ks-color-primary-light-text: 255,255,255;
    --ks-color-primary-lighter: 66,125,175;
    --ks-color-primary-lighter-text: 0,0,0;
    --ks-color-primary-dark: 33,62,86;
    --ks-color-primary-dark-text: 255,255,255;
    --ks-color-primary-darker: 22,41,57;
    --ks-color-primary-darker-text: 255,255,255;
    --ks-color-secondary-base: 172,63,0;
    --ks-color-secondary-base-text: 255,255,255;
    --ks-color-secondary-light: 213,78,0;
    --ks-color-secondary-light-text: 0,0,0;
    --ks-color-secondary-lighter: 254,93,0;
    --ks-color-secondary-lighter-text: 0,0,0;
    --ks-color-secondary-dark: 131,48,0;
    --ks-color-secondary-dark-text: 255,255,255;
    --ks-color-secondary-darker: 90,33,0;
    --ks-color-secondary-darker-text: 255,255,255;
    --ks-color-success-base: 79,130,26;
    --ks-color-success-base-text: 255,255,255;
    --ks-color-success-light: 100,164,33;
    --ks-color-success-light-text: 0,0,0;
    --ks-color-success-lighter: 120,198,40;
    --ks-color-success-lighter-text: 0,0,0;
    --ks-color-success-dark: 58,96,19;
    --ks-color-success-dark-text: 255,255,255;
    --ks-color-success-darker: 38,62,12;
    --ks-color-success-darker-text: 255,255,255;
    --ks-color-info-base: 80,155,206;
    --ks-color-info-base-text: 0,0,0;
    --ks-color-info-light: 112,173,215;
    --ks-color-info-light-text: 0,0,0;
    --ks-color-info-lighter: 144,191,224;
    --ks-color-info-lighter-text: 0,0,0;
    --ks-color-info-dark: 54,136,192;
    --ks-color-info-dark-text: 0,0,0;
    --ks-color-info-darker: 45,113,160;
    --ks-color-info-darker-text: 255,255,255;
    --ks-color-warning-base: 225,169,0;
    --ks-color-warning-base-text: 0,0,0;
    --ks-color-warning-light: 255,194,11;
    --ks-color-warning-light-text: 0,0,0;
    --ks-color-warning-lighter: 255,204,52;
    --ks-color-warning-lighter-text: 0,0,0;
    --ks-color-warning-dark: 184,138,0;
    --ks-color-warning-dark-text: 0,0,0;
    --ks-color-warning-darker: 143,108,0;
    --ks-color-warning-darker-text: 255,255,255;
    --ks-color-danger-base: 179,46,46;
    --ks-color-danger-base-text: 255,255,255;
    --ks-color-danger-light: 205,61,61;
    --ks-color-danger-light-text: 255,255,255;
    --ks-color-danger-lighter: 213,93,93;
    --ks-color-danger-lighter-text: 0,0,0;
    --ks-color-danger-dark: 147,38,38;
    --ks-color-danger-dark-text: 255,255,255;
    --ks-color-danger-darker: 114,29,29;
    --ks-color-danger-darker-text: 255,255,255;
    --ks-color-light-base: 197,209,218;
    --ks-color-light-base-text: 0,0,0;
    --ks-color-light-light: 222,229,234;
    --ks-color-light-light-text: 0,0,0;
    --ks-color-light-lighter: 247,248,250;
    --ks-color-light-lighter-text: 0,0,0;
    --ks-color-light-dark: 172,189,202;
    --ks-color-light-dark-text: 0,0,0;
    --ks-color-light-darker: 147,169,187;
    --ks-color-light-darker-text: 0,0,0;
    --ks-color-dark-base: 55,68,79;
    --ks-color-dark-base-text: 255,255,255;
    --ks-color-dark-light: 72,89,103;
    --ks-color-dark-light-text: 255,255,255;
    --ks-color-dark-lighter: 89,109,127;
    --ks-color-dark-lighter-text: 255,255,255;
    --ks-color-dark-dark: 39,47,55;
    --ks-color-dark-dark-text: 255,255,255;
    --ks-color-dark-darker: 22,27,31;
    --ks-color-dark-darker-text: 255,255,255;
}
```

:::warning NOTE
As you can see, a large number of design tokens are generated to build your color palette. For every color in the palette there will be a complementary text color generated to meet the WCAG 2.0 AA color contrast requirement. You can override the CSS variables, but please be sure to update the complementary colors to ensure your application can be used by all of your users.
:::

## Additional Settings

There will be two additional values added to the palette - `light` and `dark`. These colors will be _automatically generated_ based on the `primary` color. If you would like to specify your own `light` or `dark` color, you can add them to the map and the compiler will pick up your colors rather than auto-generate them.

There are additional settings available that will allow you to tweak the default colors depending on the brightness and saturation of your `primary` color.

```scss
$light-saturation: 0%;
$light-lightness: 50%;
$dark-saturation: 0%;
$dark-darkness: 5%;
```

If you already have a bright `primary` color, you may want to _decrease_ the `$light-lightness` and _increase_ the `$dark-darkness`.

### Variation

The color variation value determines the difference between the variations of each color (`lighter`, `light`, `dark`, and `darker`). If you would like the lights to be lighter and the darks to be darker, increase that number or do the opposite to have the reverse effect.

```scss
$color-variation: 8%;
```

## Usage

You may have noticed that the values for the CSS variables do not look like color values. They are actually the `rgb` (red/green/blue) values for the `rgb()` CSS function. This is done so that you can easily specify the opacity or `alpha` of the color. So, in order to use your color values in CSS, make sure you wrap the value in an `rgb()` or `rgba()` function.

### CSS

```css
.primary-button {
    color: rgb(--ks-color-primary-base-text);
    background-color: rgb(--ks-color-primary-base);
}

/* specify `alpha` value to create transparency in your colors */
.modal-background {
    background-color: rgba(--ks-color-dark-base, 0.75);
}

```

### SASS Mixins

There are number of SASS mixins and functions available to allow you to quickly access your color tokens.

#### Color Mixin

```scss
// signature - color($name: 'primary', $variant: 'base', $opacity: 1, $important: false)
// returns   - color: rgba({selected font CSS variable}, opacity) !important (if set to "true")

a {
    @include color(primary);

    &:hover {
        @include color(primary, darker);
    }
}
```

#### Background Color Mixin

```scss
// signature - bg-color($name: 'primary', $variant: 'base', $opacity: 1, $important: false)
// returns   - background-color: rgba({selected font CSS variable}, opacity) !important (if set to "true")
//             color: rgba({selected font CSS variable}, opacity) !important (if set to "true")

button {
    @include bg-color(primary);

    &:hover {
        @include bg-color(primary, darker);
    }
}

.modal-background {
    @include bg-color(dark, base, 0.75);

    /* there is also a short-hand syntax if you are using the `base` color */
    @include bg-color(dark, 0.75);
}
```

#### SASS Functions

In order provide greater flexibility with your color tokens you can access the color values using the `color-value()` function and the text color using the `text-color-value()` function.

```scss
* {
    &:focus {
        outline: 2px dotted color-value(primary);
    }
}

.menu {
    @include bg-color(primary);

    a,
    button {
        &:focus {
            /* update the color so it doesn't blend in with the background */
            outline-color: text-color-value(primary);
        }
    }
}
```
