---
{
    "description": "The Kickstand UI image component provides an easy way to implement lazy-loading for your images.",
    "meta": [
        {
            "property": "og:title",
            "content": "Image Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/images.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI image component provides an easy way to implement lazy-loading for your images."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/images.png"
        }
    ]
}
---

# Images

The Kickstand UI image component comes with a number of added features to help improve your page load times as well as the performance of your page once it is loaded.

## Lazy-Loading

A great performance feature is the ability to lazy-load off-screen images and control when they get loaded. This example is above the fold so it will load right away because it is already in the view-port, but the images farther down the page will be lazy-loaded.

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/superstitious.jpg"
        alt="Michael Scott"
        class="w-50 mx-auto"
        aspect-ratio="1.5:1"
        lazy
        />
</div>

```html
<ks-img src="/images/demo/superstitious.jpg" alt="Michael Scott" lazy></ks-img>
```

## Height and Width

You can explicitly specify the width and height on an image using the `height` and `width` properties. This will improve page performance as it reduces content shifting as it will pre-allocate the space on the page for the image.

```html
<ks-img src="/images/demo/superstitious.jpg" height="300" width="500"></ks-img>
```

## Aspect Ratio

Sometimes you don't always know what the height and width will be on an image depending on the screen size or because the content is dynamically generated. In these cases it is better to specify an aspect ratio and Kickstand UI will auto-generate the height and the width on the fly for you. This is especially important if you are lazy-loading images because the browser does not know how to calculate how much space the image will occupy until the image is downloaded and rendered.

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/michael_scott.jpg"
        alt="Michael Scott"
        class="w-50 mx-auto"
        aspect-ratio="3:2"
        lazy
        />
</div>

```html
<ks-img aspect-ratio="3:2" lazy></ks-img>
```

## Properties

| Property    | Attribute   | Description                                                        | Type      | Default     |
| ----------- | ----------- | ------------------------------------------------------------------ | --------- | ----------- |
| `alt`       | `alt`       | alternate text for image                                           | `string`  | `undefined` |
| `lazy`      | `lazy`      | toggles whether an image will be lazy loaded                       | `boolean` | `undefined` |
| `src`       | `src`       | url to image                                                       | `string`  | `undefined` |
| `threshold` | `threshold` | distance from the bottom of the viewport a lazy image will display (in pixels) | `number`  | `300`       |
| `height`      | `height`       | sets the `height` attribute on the `img` element            | `any`     | `undefined` |
| `width`       | `width`        | sets the `width` attribute on the `img` element            | `number`  | `undefined` |
| `aspectRatio` | `aspect-ratio` | sets the `width` and `height` attribute on the `img` element based on the defined aspect-ratio           | `string`  | `undefined` |

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/100-percent-Michael-Scott.png"
        alt="Michael Scott with quote on whiteboard"
        class="w-50 mx-auto"
        aspect-ratio="4:3"
        lazy
        />
    <div class="text-lg mt-sm">I was lazy-loaded!!!</div>
</div>

```html
<ks-img src="/images/demo/100-percent-Michael-Scott.png" alt="Michael Scott with quote on whiteboard" aspect-ratio="4:3" lazy threshold="500"></ks-img>
```
