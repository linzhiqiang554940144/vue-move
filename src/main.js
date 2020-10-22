import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import router from '@/router'

import '@/utils/flexible'

import '@/plugins/vant'
import '@/plugins/vue-echarts'

import * as filters from '@/filters'

Vue.config.productionTip = false

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')
