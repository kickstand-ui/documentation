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
