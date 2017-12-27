import Vue from 'vue'
import AppCms from './AppCms'
import store from '@/store/'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(AppCms),
})
