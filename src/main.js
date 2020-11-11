import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'

Vue.config.productionTip = false

// 全局定义一个过滤器， formatYi
Vue.filter('formatYi', (value) => {
  var YI = Math.pow(10, 8)
  if (value > YI) {
    return `${(value / YI).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4))}万`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
