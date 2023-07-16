# Powerful preprocessor tools for an accessible color palette.

**Add it to your project now via installation by NPM:**

```bash
npm install precolor --save-dev
```

---

## What is Precolor?
Precolor is a collection of CSS color manipulation tools written in SASS/SCSS. Purposely designed to reduce CSS color complexity and increase accessibility on the web.

## Prerequisite Installation

### Step 1: Install NPM

To begin, you will need NPM (Node Package Manager).  
Here is an [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm).

### Step 2: Install Sass

Once you have NPM installed, installation of Sass is easy.  
Run the following terminal command:

```bash
npm install -g sass
```

**You're all set!**

## Getting Started

### Installation

Navigate to the root directory of your project of choice.  
Run the following command:

```bash
npm install precolor --save-dev
```

This will install Precolor locally in the directory `node_modules/precolor/`.

### Importing

#### Forwarding & Configuration

Import the package with the Sass `@forward` rule in a new file named `_precolor.scss`.

```scss
@forward "node_modules/precolor/";
```

In addition to being a accessible entry point: `@forward` allows for the configuration of a module's `!default` variables.

```scss
@forward "node_modules/precolor/" with (
	$variable: value !default,
	...
);
```

*The `!default` flag after the variable value is optional, but it allows further configuration by other stylesheets.*

#### Using & Namespacing

Use the package with the Sass `@use` rule in a new file named `styles.scss`.

```scss
@use "precolor" as color;
```

In the example above: `color` is the namespace of the module. Members of the module can be accessed by prepending `color.`. Ex: `color.$primary`.

*You can omit the namespace using `*` (wildcard).*

## Default Colors

Having a consistent color palette is critical to visual design. Precolor provides defaults based on CSS named colors, as well as a more deliberate and concise palette. These colors are also mapped. Named `$colors` and `$color-palette` respectively.

| Color Palette | Description | RGB Hex Value | CSS Named Color |
| ------------- | ----------- | ------------- | --------------- |
| `$primary` | The most frequent color used. It represents primary user-interface elements. | `#5490b8` | `$blue` |
| `$secondary` | Optional secondary color used to accent user-interface elements. | `#727C83` | `$gray` |
| `$success` | Represents when a user action has been successful. | `#74bf80` | `$green` |
| `$danger`	| Represents a critical action or failure. | `#EF6461` | `$red` |
| `$warning` | Represents a potentially dangerous user action. | `#FFCB47` | `$yellow` |
| `$info` | Represents information to the user. | `#6bcee7` | `$cyan` |
| `$light` | The primary light color. Commonly used for backgrounds. | `#FBFBFB` | `$white` |
| `$dark` | The primary dark color. Commonly used for backgrounds. | `#18181C` | `$black` |
||| `#c9c8d6` | `$silver` |
||| `#b91c68` | `$maroon` |
||| `#F47C98` | `$pink` |
||| `#b350ed` | `$purple` |
||| `#9892C8` | `$indigo` |
||| `#df11af` | `$fuchsia` |
||| `#00ff6e` | `$lime` |
||| `#389269` | `$olive` |
||| `#EE8434` | `$orange` |
||| `#BB946C` | `$brown` |
||| `#00305f` | `$navy` |
||| `#2a9186` | `$teal` |
||| `$cyan` | `$aqua` |

## Color Schemes

Differing color schemes can improve your website's visibility during certain times of the day. It is a great quality of life feature!

### Color Schemes (Mixin)

Mixin `color-schemes` builds `prefers-color-scheme` media queries using differing colors.

```scss
@include color-schemes($light: $light, $dark: $dark)
```

**Usage & Parameters:**

Each parameter represents a value for the `prefers-color-scheme` media query:

1. `$light` - The light (default) color.
2. `$dark` - The dark color.

```scss
// Outputs color $light and $dark:
@include color-schemes using ($color) {
	@debug $color;
}
```

### Light and Dark (Mixins)

Mixins `light` and `dark` build a `prefers-color-scheme` media query for users requesting light or dark mode respectively.

```scss
@include light {
	...
}

@include dark {
	...
}
```

## Color Contrast

Ensuring color is intelligible is crucial to designing a website anyone can use. If nobody can see your website, it is difficult for everyone to stay on your website.

### High Contrast

Function `high-contrast` narrows down a `$color-list` to the **first** color that is **closest** to the `$target` contrast-ratio compared to `$background`.

```scss
high-contrast($color-list, $background, $target: 21);
```

**Usage & Parameters:**

1. `$color-list` - The color set to be compared.
2. `$background` - The color to compare contrast against.
3. `$target` - The contrast-ratio value to be met.

```scss
// Outputs the color blue:
@debug high-contrast(red green blue, white);
```

### Contrast Color

Function `contrast-color` filters a `$color-list` using the `high-contrast` function and defaults to tint the color to meet the `$target` contrast-ratio compared to `$background`.

```scss
contrast-color($color-list, $background, $target: 7);
```

**Usage & Parameters:**

1. `$color-list` - The color set to be compared.
2. `$background` - The color to compare contrast against.
3. `$target` - The contrast-ratio value to be met.

```scss
// Outputs the color green:
@debug contrast-color(red green blue, white, 4.5);
```

### Contrast Ratio

Function `contrast-ratio` gets the contrast-ratio between two colors as a number from `1` to `21`.

```scss
contrast-ratio($color1, $color2);
```

**Usage & Parameters:**

1. `$color1` - First color value.
2. `$color2` - Second color value.


```scss
// Outputs the number 21:
@debug contrast-ratio(white, black);
```

### A11y (Accessibility)

Function `a11y` returns a contrast-ratio value associated with accessibility `$keywords`.

```scss
a11y($keywords);
```

**Usage & Parameters:**

1. `$keywords` - An unquoted string of accessibility keywords.  
Defaults to `7`. Can accept a number.

```scss
// Outputs the number 4.5:
@debug a11y(aa);
@debug a11y(aaa large);
// Outputs the number 3:
@debug a11y(aa large);
@debug a11y(aa ui);
// Outputs the number 7:
@debug a11y(aaa);
```

### Contrast (Mixin)

Mixin `contrast` builds `prefers-contrast` media queries using differing preferences.

```scss
@include contrast($no-preference: aa, $more: aaa, $less: null, $custom: null)
```

**Usage & Parameters:**

Each parameter represents an `a11y` function value for the `prefers-contrast` media query:

1. `$no-preference` - The default value.
2. `$more` - High contrast value.
3. `$less` - Less contrast value.
4. `$custom` - None of the above. The client has requested a custom palette by users of `forced-colors: active`.

```scss
// Outputs contrast-ratios 4.5 (no-preference) and 7 (more):
@include contrast using ($ratio) {
	@debug $ratio;
}
```

## Color Luminance

Differing levels of color luminance can portray depth and interactivity in a design. Presenting a clear visual hierarchy and signaling to the user that the application is responding to their inputs.

### Luminance

Function `luminance` calculates the **relative** luminance of a given `$color` from `0` to `1`.

```scss
luminance($color);
```

**Usage & Parameters:**

1. `$color` - The color to calculate against.

```scss
// Outputs the number 1:
@debug luminance(white);
```

### Shade and Tint and Tone

Functions `shade`, `tint` and `tone` modify the HSL lightness attribute of a `$color` by a given `$amount`.

Shade darkens, tint lightens, and tone brings the color closer to gray.

```scss
shade($color, $amount);
tint($color, $amount);
tone($color, $amount);
```

**Usage & Parameters:**

1. `$color` - The color to modify lightness of.
2. `$amount` - A percentage or weight (number range of `0` to `1000`).

```scss
// Outputs the color white:
@debug shade(gray, -50%);
@debug tint(gray, 500);
// Outputs the color gray:
@debug tone(white, 100%);
```

## Sass Color Module

The Sass language itself has many color functions of its own. These are aptly forwarded in Precolor.  
https://sass-lang.com/documentation/modules/color/

| Module Function | Description | Snippet | Output |
| --------------- | ----------- | ------- | ------ |
| alpha | Retrieves alpha channel of color as a number from `0` to `1`. | `alpha(rgba(0, 0, 0, 0.5))` | `0.5` |
| blackness | Retrieves color HWB blackness as a percentage from `0%` to `100%`. | `blackness(black)` | `100%` |
| blue | Retrieves blue channel of color as a number from `0` to `255`. | `blue(#0000FF)` | `255` |
| grayscale | Removes saturation from color. | `grayscale(orange)` | `gray` |
| green | Retrieves green channel of color as a number from `0` to `255`. | `green(#00FF00)` | `255` |
| hue | Retrieves color hue value between `0deg` and `360deg`. | `hue(yellow)` | `60deg` |
| hwb | Creates color from hue, whiteness and blackness. Optionally alpha transparency. | `hwb(180deg, 0%, 50%)` | `teal` |
| invert | Modifies color and outputs its negative. | `invert(white, 100%)` | `black` |
| lightness | Retrieves color HSL lightness as a percentage from `0%` to `100%`. | `lightness(purple)` | `25%` |
| red | Retrieves red channel of color as a number from `0` to `255`. | `red(#FF0000)` | `255` |
| saturation | Retrieves color HSL saturation as a percentage from `0%` to `100%`. | `saturation(brown)` | `60%` |
| whiteness | Retrieves color HWB whiteness as a percentage from `0%` to `100%`. | `whiteness(white)` | `100%` |
| color-adjust | Modifies color properties by fixed amounts. [Learn More.](https://sass-lang.com/documentation/modules/color/#adjust) | `color-adjust(lime, $blackness: 50%)` | `green` |
| color-change | Modifies color properties by changing them to new values. [Learn More.](https://sass-lang.com/documentation/modules/color/#change) | `color-change(yellow, $green: 0)` | `red` |
| color-complement | Retrieves color RGB complement by rotating hue by `180deg`. | `color-complement(blue)` | `yellow` |
| color-mix | Retrieves color by mixing two colors together by percentage. [Learn More.](https://sass-lang.com/documentation/modules/color/#mix) | `color-mix(lime, blue, 50%)` | `teal` |
| color-scale | Modifies color properties by fluidly scaling them. [Learn More.](https://sass-lang.com/documentation/modules/color/#scale) | `color-scale(green, $green: 100%)` | `lime` |

## Acknowledgment
Precolor was built by Joshua Elijah Sandoval.

## License
Precolor is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.