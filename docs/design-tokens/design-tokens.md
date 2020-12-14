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

# Design Tokens

Design tokens are the basic building blocks of your application and form the foundation of your design system. These are a set of pre-defined values that are reused throughout you application to create UI consistency and build your brand identity. As you will see, there are many different types of design tokens available including typography, spacing units, and color.

## Customizing Your Application

There are two ways to customize your design tokens:

1. SASS Variables (recommended)
2. CSS Variables

### SASS

It is highly recommended that you take advantage of the SASS tooling that is provided as part of the Kickstand UI framework. They are designed to make updating and maintain your system easy and efficient. Feel free to download the variables template and add to your application to begin customizing your application.

<div class="text-center mt-xl">
    <ks-button href="/downloads/_variables.scss" display="hollow" download>Download SASS Variables Template</ks-button>
</div>

### CSS

Not everyone is in a position to or likes the idea of using a preprocessor for compiling their styles. If you are planning on using the precompiled styles, it is still very easy to customize the design system to meet your needs. All of the design tokens are converted to CSS variables so you can updated them in a central place and have it globally update your application. You can download the variables template and add it to your project.

<div class="text-center my-xl">
    <ks-button href="/downloads/variables.css" display="hollow" download>Download CSS Variables Template</ks-button>
</div>

:::tip NOTE
Make sure your custom CSS files are loaded after Kickstand UI's style to endure that they are appropriately rendered.
:::

## Documentation

The documentation provided in this section will provide you with information on how to use the design tokens for both SASS and CSS. It is _highly_ recommended that you use one or the other in your application. Trying to use both could result in confusion a potential code inconsistencies.

Thank you for choosing Kickstand UI and feel free to [reach out](../contact.md)!.
