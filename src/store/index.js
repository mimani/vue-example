import Vue from 'vue'
import Vuex from 'vuex'
import cartStore from './modules/cartStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cartStore
  },
  strict: debug
})
