import Vue from 'vue'
import AppCms from './AppCms'
import store from '@/store/'
import router from './router'

Vue.config.productionTip = false

console.log(
  `%c App CMS %c Version ${VERSION} %c`,
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:transparent',
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(AppCms),
})
