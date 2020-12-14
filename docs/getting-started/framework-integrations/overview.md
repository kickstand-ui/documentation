---
{
    "description": "A overview on how to integrate Kickstand UI components into your applications.",
    "meta": [
        {
            "property": "og:title",
            "content": "Add to Your Project - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "A overview on how to integrate Kickstand UI components into your applications."
        }
    ]
}
---


# Framework Overview

Integrating Kickstand UI into your framework is not _required_ in order to take advantage of the component library. However, doing so enables the web components to behave like part of the framework.

## Build Process

Kickstand UI's styles are built using [SASS](https://sass-lang.com/). Using SASS is not required to use and customize Kickstand UI for your needs, but we have created some great [SASS tools](../../design-tokens/design-tokens.md) to really accelerate the development process.

In addition to compiling the SASS, you will need to incorporate post-processing into your build pipeline. The SASS is built without vendor prefixes and should be added using a tool like [PostCSS's](https://postcss.org/) [Autoprefixer](https://github.com/postcss/autoprefixer) to provide cross-browser consistency.

If there are any integration issues with any of the frameworks listed or if you are interested in how integrate with another framework, please feel free to [reach out](/contact.html), but also take a looks at Stencil's great [documentation](https://stenciljs.com/docs/overview).
