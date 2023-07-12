# Powerful preprocessor tools for a accessible color palette.

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

## Basic Usage

### Color Accessibility

Ensuring color is intelligible is crucial to designing a website anyone can use. If nobody can see your website, it is difficult for everyone to stay on your website.

#### Contrast Color

Function `contrast-color` is the best way to ensure a color's contrast on a background is accessible.

**Usage & Parameters:**

1. `$color-list` - The desired color, or color set to be compared.
2. `$background` - Color to compare contrast against.
3. `$target` - The contrast-ratio value to be met.

```scss
contrast-color($color-list, $background, $target: 7);
```

**How Output is Determined:**

1. Parameter `$color-list` is narrowed down to the **first** value that is closest **not greatest** to the `$target` contrast-ratio compared to `$background`.
2. The `$color-list` color is compared to `$background` and tinted to meet the `$target` contrast-ratio. Otherwise, it is shaded.


```scss
// Outputs the color green:
@debug contrast-color(red green blue, white, 4.5);
```