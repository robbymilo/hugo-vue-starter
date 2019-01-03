A starting point for building Hugo themes with single-file Vue.js components. Hugo layout files are based off: https://github.com/budparr/gohugo-theme-ananke

## Installation

Inside the folder of your Hugo site run:

```console
cd themes
```
```console
git clone https://github.com/robbymilo/hugo-vue-starter.git
```
```console
cd themes/hugo-vue-starter/src
```
```console
npm install
```

## Development Mode

On .css, .scss, .js, and .vue file saves Webpack will re-compile and write a new .js or .css file which Hugo will pickup and reload.

To use development mode

```console
npm run start
```

Then, in the root folder

```console
hugo server
```

## Production Mode

To build for production

```console
npm run build
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.