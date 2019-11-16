import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small' })

import '@/styles/index.scss' // global css

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/pos.png'),
  loading: require('./assets/pos.png'),
  attempt: 1
})

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
// mount method and config
import { handleMoney } from '@/utils/accounting'
import moment from 'moment'

const styleConfig = {
  tableHeader: { background: '#f5f7fa', color: '#909399' },
  tableHeight: 'calc(100vh - 280px)'
}

Vue.prototype.styleConfig = styleConfig
Vue.prototype.handleMoney = handleMoney
Vue.prototype.moment = moment
Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
