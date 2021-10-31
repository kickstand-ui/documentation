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

## 2.17.0

### Add

- Support for async options (fetched from the server) for [autocomplete component](forms/autocomplete.md);

### Fix

- Keyboard functionality for `auto-expand` feature for [autocomplete component](forms/autocomplete.md)
- Display option text instead of value when option is selected for [autocomplete component](forms/autocomplete.md)

## 2.16.0

### Add

- Created new `clear` function and `cleared` event to [forms](forms/form.md#clearing-forms)
- Optimized [icon](components/icons.md) format for better performance

## 2.15.0

### Add

- `formData` property for easy [form results](https://kickstand-ui.com/forms/form.html#submission)

### Fix

- Remove duplicate icon from [form](https://kickstand-ui.com/forms/form.html) error message

## 2.14.0

### Add

- Fallback `src` for [image component](components/images.md)
- [Alert Icons](components/alert.md#icons)

### Fix

- Adjusted [form field button](forms/form-field.md) button layout
- Adjusted [loading icon](components/loading.md) layout

## 2.13.x

### Add

- Created new [skip-to-content](components/skip-to-content.md) utility class
- Create new [scroll-to-top](components/scroll-to-top.md) component
- Create new [table utility classes](utilities/table.md) for sticky headers and columns
- Add [autcomplete](forms/autocomplete.md#auto-expand) `auto-expand` functionality

### Fix

- [Menu Bar](components/menu-bar.md) component home link for icon and tagline
- [Menu Bar](components/menu-bar.md) link color for dropdown button element on inverted menus
- [Menu Bar](components/menu-bar.md) mobile drop-down display
- Removed redundancy in [Autocomplete](forms/autocomplete.md) IDs

## 2.12.0

### Add

- Add markup support for [accordion](components/accordion.md) headings
- Add markup support for [tab text](components/tabs.md)
- Add keyboard navigation support for the [carousel component](components/carousel.md)
- Add `link-text` property for the [gallery component](components/gallery.md)
- Add listener to watch for slot changes in [gallery component](components/gallery.md)

### Fix

- Tag references in the `README.md` file

## 2.11.0

### Add

- Add slot change listeners for the [breadcumbs](components/breadcrumbs.md), [carousel](components/carousel.md), and [tabs](components/tabs.md) components.

## 2.10.0

### Fix

- Update [dropdown component](./components/dropdown.md) to prevent multiple window listeners
- Move focus element in [tooltip](components/tooltip.md) to wrapper `span` rather than on element
- Remove unnecessary `roles` from [card components](components/card.md)

### Add

- Update [accordion](components/accordion.md) to be improve semantics and accessibility and removed inaccurate `role` attributes
- Add label for [form field tooltip icon](forms/form-field.md#tooltip-text)
- Add props to control loading overlay in the [button component](components/button.md)

## 2.9.0

### Fix

- Responsive [modals](components/modal.md)

## 2.8.2

### Fix

- Update [overlay component](components/overlay.md) accessibility to use `aria-modal` attribute
- Remove `rotate` property from [icon component](components/icons.md) to allow icon animations

## 2.8.1

### Fix

- Update `find` and `findAll` [DOM Utilities](utilities/dom-utilities.md) to `query` and `queryAll` to prevent confusion with the `find` array function.

## 2.8.0

### Add

- Add [editor integrations](getting-started/installation.md#editor-integrations)

## 2.7.0

### Add

- [DOM Utilities](utilities/dom-utilities.md)

### Fix

- Accessibility for [autocomplete](forms/autocomplete.md)

## 2.6.6

### Fix

- [Card component](components/card.md) display for IE 11

## 2.6.5

### Fix

- [Spin-Box](forms/spin-box.md) support for IE 11

## 2.6.4

### Fix

- [Card component](components/card.md) layout for IE 11

### Update

- [Autocomplete](forms/autocomplete.md) UX improvements
- 

## 2.6.3

### Fix

- [Animated Icon](components/icons.md) spacing

## 2.6.2

### Fix

- [Icon](components/icons.md) spacing

## 2.6.1

### Fix

- Fix [form](forms/form.md) submission timing.

## 2.6.0

### Fix

- Data not available on `submitted` event in [form component](forms/form.md) unless using `timeOut`
- Image display in [card component](components/card.md) for IE 11
- Tab display in [tabs component](components/tabs.md) for IE 11
- Positioning for [modal component](components/modal.md) for IE 11
- [Spin-Box](forms/spin-box.md) support for IE 11

### Add

- Improved styling for [range component](forms/range.md)
- Adjust input icon and button display in [form field component](forms/form-field.md)
- Rotate animation fallback in [loading component](components/loading.md) for IE 11

## 2.5.4

### Fix

- `top` and `bottom` responsive margin utility classes were set to negative

### Add

- Improve disabled styles for [switches](components/switch.md) and [checkboxes](forms/checkbox.md).

## 2.5.3

### Fix

- Adjust the [checkbox](forms/checkbox.md) indeterminate styling

## 2.5.2

### Fix

- Add missing attribute bindings for file upload

## 2.5.1

### Fix

- Update borders to use default values

### New

- Add disabled and indeterminate states for [checkboxes](forms/checkbox.md), [checklists](forms/checklist.md), and [radio lists](forms/radiolist.md)

## 2.5.0

### Fix

- Remove unused utility functions

### New

- Add props for [file upload](./forms/file.md)

## 2.4

### Fix

- form field icon positioning when error messages and help text are visible
- prevent click events from executing on disabled [buttons](components/button.md)
- inline [button](components/button.md) styles
- text cropping on `select` input

### New

- Add update [spin-box](forms/spin-box.md) input changes to trigger the `changed` event.
- Add `auto-expand` feature for [autocomplete component](./forms/autocomplete.md)
- Add show/hide methods to [drop-downs](components/dropdown.md) to control drop-downs programmatically
- Add dynamic link tags for framework router support in [breadcrumbs](components/breadcrumbs.md), [buttons](components/button.md), [cards](components/card.md), [carousels](components/carousel.md), [galleries](components/gallery.md), and [menu bar](components/menu-bar.md).
- `text-normal` utility class now resets all text styles
- removed `tab-index` prop from [button](components/button.md)
- add `cleared` event listener to the [search input](forms/search.md)

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
