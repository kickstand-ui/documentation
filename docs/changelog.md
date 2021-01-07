---
{
    "description": "A list of changes in each release of Kickstand UI",
    "meta": [
        {
            "property": "og:title",
            "content": "Changelog - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "A list of changes in each release of Kickstand UI"
        }
    ]
}
---

# Changelog

## 2.3.2

- Fix new [image](components/images.md) `width` and `heigh` attributes when rendered within other components

## 2.3.1

### Fix

- Add `stretch` option for [grid component](layout/grid.md)'s `position` property
- Add new `height`, `width`, and `aspect-ratio` properties to [card](components/card.md) and [carousel](components/carousel.md) components
- Fix `loading` and `disabled` state for the [dropdown component](components/dropdown.md)

## 2.3.0

### Fixed

- [Icon](components/icons.md) layout sizing
- Fix button controls in small screen resolutions in [gallery component](./components/gallery.md)

### New

- Added `button-class` attribute to [button component](./components/button.md)
  - `css-class` attribute will continue to work, but will be deprecated in v3
- Added `disabled`, `loading`, and `size` button attributes to the [dropdown component](components/dropdown.md) for more control
- add `width`, `height`, and `aspect-ratio` props to the [image component](components/images.md)
- add `input-class` property to the [form field component](forms/form-field.md)
- update close button colors to `dark` for [modal](components/modal.md) and [side drawer](components/side-drawer.md) components
- add sizes to [spin-box](forms/spin-box.md)
- add [font-family](utilities/text.md#family) utility classes
- add play/pause button for autoplay in [carousel component](components/carousel.md)

## 2.2.0

### Fixed

- [Side Drawer](components/side-drawer.md) not properly closing when using keyboard shortcuts

### New

- [Inline Forms](forms/form.md#inline-forms)
- [Form field sizes](forms/form-field.md#sizes)
- [Updated button sizes](components/button.md#sizes)
- [Loading overlay themes](components/loading.md#theme)

## 2.1.1

- fixed black/white background utility classes

## 2.1.0

### Fixed

- Hide [card](components/card.md) subheading if there is no value
- Update [badge](./components/badge.md) background color to use CSS variable
- [show utility class](utilities/display.md) hid element

### New

- List [utility classes](utilities/list.md)
- Text transform [utility classes](utilities/text.md#transforms)
- White/black/transparent [utility classes](utilities/colors.md)
- Hide [form field label](forms/form-field.md#hide-label)

## 2.0.0

- Upgrade to Stencil 2.0
- Migrate [design tokens](./design-tokens/design-tokens.md) to CSS variables
- Add UI animations
- Add border radiuses to UI
- Add clear search button in [search input](./forms/search.md)
- Add clear search button in [autocomplete input](./forms/autocomplete.md)
- Add [password input](./forms/password.md) visibility toggle
- Add [input icons](./forms/../components/form-field.md)
- New [button bar](components/button-bar.md) component
- New [spin-box](./forms/spin-box.md) component
- Update [carousel](./components/carousel.md) indicators and thumbnail display
- Update [icons](components/icons.md) to use rounded caps and rounded joins
- Remove `ks-crumb` component from [breadcrumb](./components/breadcrumbs.md) component
- Remove icon property from [button](./components/button.md) component
