# Hugo + Vue.js Starter Theme

A starting point for building Hugo themes with single-file Vue.js components. Hugo layout files are based off: https://github.com/budparr/gohugo-theme-ananke

#### Dev Features
* SCSS with source maps
* Lazy loaded single-file Vue.js Components

#### Production Features
* CSS minification with autoprefixing for older browsers
* Live reload for SCSS/Vue.js files
* Lazy loaded single-file Vue.js Components
* Base64 encoding of small assets
* A vendor.js and app.js files
* Hashed filenames for cache busting

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development of a new Hugo theme. This repo is meant to be forked.

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

* **Robby Milo** [PurpleBooth](https://github.com/robbymilo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
