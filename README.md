A starting point for building Hugo themes with single-file Vue.js components. Hugo layout files are based off: https://github.com/budparr/gohugo-theme-ananke

## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/robbymilo/hugo-vue-starter.git
    $ npm install

## Development Mode

On .css, .scss, .js, and .vue file saves Webpack will re-compile and write a new .js or .css file which Hugo will pickup and reload.

To use development mode

    $ npm run start

Then, in the root folder

    $ hugo server

## Production Mode

To build for production

    $ npm run build

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.