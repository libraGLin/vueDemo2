import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue-swiper组件
import { Swipe, SwipeItem } from 'vue-swipe'

Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

require('vue-swipe/dist/vue-swipe.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
