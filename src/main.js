import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
import axios from 'axios'
import './assets/css/cssreset.css'
import './assets/css/animate.css'
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
import Vuex from 'vuex'

Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(vueRouter)
Vue.use(Mint);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
	el:'#app',
	render:h=>h(App),
	router:router,
	store:store
})
