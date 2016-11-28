require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App } // Object spread copying everything from App.vue
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
