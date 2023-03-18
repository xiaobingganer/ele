import Vue from 'vue'
import App from './App.vue'

// 引入eleui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import './assets/style/common.css'
import VueRouter from 'vue-router';
import router from './router'
import demo from '@/utils/demo'

//  引入Echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.use(VueRouter)
Vue.use(demo)
Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')