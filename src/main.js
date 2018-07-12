// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vonic from 'vonic'
import App from './pages/app'
import store from 'store'
import routes from './router'
import 'common/index.styl'

Vue.config.productionTip = false
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
Vue.use(Vonic.app, {
  routes,
  store,
})

