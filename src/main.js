import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.styl' // global css


import i18n from './lang' // Internationalization

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

//Vue.use(ElementUI, { locale })
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false    //设置为 false 以阻止 vue 在启动时生成生产提示。

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

