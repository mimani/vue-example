
// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)

import Vue from 'vue'
import path from 'path'
// import VueMdl from '../../src/vue-mdl'
// require('material-design-lite/material.js')
// require('material-design-lite/material.css')
import App from './App'

// Vue.use(VueMdl)

let context = require.context('src/components', false, /.vue$/)
let components = []
context.keys().forEach((comp) => {
  let name = path.basename(comp, '.vue')
  console.log('name us ' + name)
  components.push(name)
  Vue.component(name, context(comp))
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  data: {
    components
  },
  components: { App }
})
