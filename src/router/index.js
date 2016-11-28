import Vue from 'vue'

// import Router from 'vue-router'

var Router = require('vue-router')
Vue.use(Router)

import landingView from '../views/landingView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    { path: '/', component: landingView }
  ]
})
