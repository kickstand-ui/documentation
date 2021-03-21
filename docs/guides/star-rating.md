---
{
    "description": "Using Kickstand UI to add a Star Rating to your site.",
    "meta": [
        {
            "property": "og:title",
            "content": "Adding a Star Rating To your Site - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        },
        {
            "property": "og:description",
            "content": "Using Kickstand UI to add a Star Rating to your site."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        }
    ]
}
---

# Star Rating Component

In this guide you will see how to graphically display a numeric rating using a star rating component.

<div class="completed star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars" style="max-width: 70%;">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score"><span class="sr-only">Rating:</span> 3.5</strong>
</div>

<style>
    .completed.star-rating {
        font-size: var(--ks-font-size-lg);
    }

    .completed.star-rating .star-wrapper {
        display: inline-block;
        position: relative;
        color: rgb(var(--ks-color-warning-base));
    }

    .completed.star-rating .star-wrapper .empty-stars {
        display: flex;
    }

    .completed.star-rating .star-wrapper .filled-stars {
        display: flex;
        position: absolute;
        overflow: hidden;
        white-space: nowrap;
        top: 0;
        left: 0;
    }

    .completed.star-rating .score {
        margin-left: var(--ks-spacing-sm);
    }
</style>

## HTML

The first thing we are going to do is add a wrapper `div` to encapsulate everything and make it more portable.

```html
<div class="star-rating">
</div>
```

### Adding Icons

Next we are going to add two sets of icons (one set of empty starts and another of filled stars) and wrap them in a `span` so that we can do some positioning of them later.

```html
<div class="star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
</div>
```

They should look something like this:

<div class="star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
</div>

### Adding the Rating

Finally, let's add the numeric rating.

```html
<div class="star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score">Rating: 3.5</strong>
</div>
```

<div class="star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score">Rating: 3.5</strong>
</div>

## Styling

Now that all of our markup is set, let's begin styling it. In these examples I will use both `CSS` and `Sass` so you can see how to use [design tokens](../design-tokens/overview.md) for each.

### Positioning

First, let's position the stars inline and overlay the filled stars over the top of the empty stars.

#### CSS

```css
.star-rating .star-wrapper {
    display: inline-block;
    position: relative;
}

.star-rating .star-wrapper .empty-stars {
    display: flex;
}

.star-rating .star-wrapper .filled-stars {
    display: flex;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    top: 0;
    left: 0;
}
```

:::tip NOTE
All of the styles will be prefixed with the `.star-rating` class to encapsulate the styles in order to:

1. prevent styles for this component from affecting other components
2. add specificity to prevent external styles form negatively affecting the component

If you are using Sass, nesting your styles will take care of that for you.
:::

#### Sass

```scss
.star-rating {
    .star-wrapper {
        display: inline-block;
        position: relative;

        .empty-stars {
            display: flex;
        }

        .filled-stars {
            display: flex;
            position: absolute;
            overflow: hidden;
            white-space: nowrap;
            top: 0;
            left: 0;
        }
    }
}
```

### Styling

Now, let's use our design tokens to style component. We will set the star color, increase the size to improve visibility, and add some spacing between the stars and the rating.

#### CSS

```css
.star-rating {
    font-size: var(--ks-font-size-lg);
}

.star-rating .star-wrapper {
    ...
    color: rgb(var(--ks-color-warning-base));
}

.star-rating .score {
    margin-left: var(--ks-spacing-sm);
}
```

:::tip NOTE
When using colors, you reed to wrap them in the `rgb` CSS function as only the `red`, `green`, and `blue` values are stored. This is so you can control the opacity or alpha value using the `rgba` function if you would like to.
:::

#### Sass

```scss
.star-rating {
    @include font-size(lg);

    .star-wrapper {
        ...
        @include color(warning);
    }

    .score {
        @include ml(sm);
    }
}
```

It should now look something like this.

<div class="completed star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score">Rating: 3.5</strong>
</div>

### Hide Label

The "Rating:" label feels redundant for sighted users, but, by default, the icons are hidden to screen readers. Let's hide the label for sighted users, but keep it visible for assistive technologies. In order to do that, we will wrap it in a `span` and add the [`sr-only`](../utilities/display.md#screen-reader-only) (screen reader only) utility class to it so hide the content.

```html
<strong class="score"><span class="sr-only">Rating:</span> 3.5</strong>
```

## Display the Score

The final piece is to display the correct amount of filled in stars. This is as simple ass adding some inline styling to the filled in stars that sets the `max-width` to the appropriate width percentage related to the score.

```html
<span class="filled-stars" style="max-width: 70%;">
```

<div class="completed star-rating mb-xxxl">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars" style="max-width: 70%;">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score"><span class="sr-only">Rating:</span> 3.5</strong>
</div>

```html
<span class="filled-stars" style="max-width: 20%;">
```

<div class="completed star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars" style="max-width: 20%;">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score"><span class="sr-only">Rating:</span> 1</strong>
</div>

## Final Result

### Final HTML

```html
<div class="star-rating">
    <span class="star-wrapper">
        <span class="empty-stars">
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
            <ks-icon icon="star"></ks-icon>
        </span>
        <span class="filled-stars" style="max-width: 70%;">
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
            <ks-icon icon="star_fill"></ks-icon>
        </span>
    </span>
    <strong class="score"><span class="sr-only">Rating:</span> 3.5</strong>
</div>
```

### Final CSS

```css
.star-rating {
    font-size: var(--ks-font-size-lg);
}

.star-rating .star-wrapper {
    display: inline-block;
    position: relative;
    color: rgb(var(--ks-color-warning-base));
}

.star-rating .star-wrapper .empty-stars {
    display: flex;
}

.star-rating .star-wrapper .filled-stars {
    display: flex;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    top: 0;
    left: 0;
}

.star-rating .score {
    margin-left: var(--ks-spacing-sm);
}
```

### Final SASS

```scss
.star-rating {
    @include font-size(lg);

    .star-wrapper {
        display: inline-block;
        position: relative;
        @include color(warning);

        .empty-stars {
            display: flex;
        }

        .filled-stars {
            display: flex;
            position: absolute;
            overflow: hidden;
            white-space: nowrap;
            top: 0;
            left: 0;
        }
    }

    .score {
        @include ml(sm);
    }
}
```
