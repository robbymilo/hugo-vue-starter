# Hugo + Vue.js Starter Theme

A starting point for building Hugo themes with single-file Vue.js components. Hugo layout files are based off: https://github.com/budparr/gohugo-theme-ananke

#### Dev Features
* SCSS with source maps
* Lazy loaded single-file Vue.js Components
* Live reload for SCSS/Vue.js files

#### Production Features
* CSS minification with autoprefixing for older browsers
* Lazy loaded single-file Vue.js Components
* Base64 encoding of small assets
* vendor.js and app.js files, as well as lazy loaded component files
* Hashed filenames for cache busting
* SVG inlining

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development of a new Hugo theme. This repo is meant to be forked.

I've added a test Vue.js component, png, svg, and font to make sure everything is compiling properly.

### Prerequisites

* Node >= 12.1.0
* npm >= 6.9.0

### Installing

Clone this repo as a theme in your Hugo install:

```console
cd themes && git clone https://github.com/robbymilo/hugo-vue-starter.git
```
```console
cd hugo-vue-starter/src
```
```console
npm i
```
Make sure there is a div with the id of "app" somewhere in your theme - use vue.js components within this element.

### Development Mode

On .css, .scss, .js, and .vue file saves webpack will re-compile and create a new .js or .css file.

Note: webpack-dev-server hot reload is disabled. Instead, it creates a new file with a reference in webpack_assets.json, which Hugo then recognizes and rebuilds the site.

To use development mode, navigate to the src folder:

```console
npm run start
```

Then, in the root folder of your Hugo install:

```console
hugo server
```

## Production Mode

To build for production

```console
npm run build
```

## Authors

* **Robby Milo**
