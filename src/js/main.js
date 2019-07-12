import "../scss/main.scss"; // import SCSS file

import Vue from "vue"; // import Vue.js

import { functions } from "./vue/mixins/functions.js"; // shared methods go here

// import single-file Vue.js components for lazy-loading
var vueCounter = () =>
  import(
    /* webpackChunkName: "vueCounter" */
    /* webpackMode: "lazy" */
    "./vue/components/counter.vue"
  );

// register our Vue.js instance
new Vue({
  el: "#app",
  mixins: [functions],
  components: {
    vueCounter
  }
});
