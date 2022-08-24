import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './lang/lang'
import router from './router'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import {isEmpty, isNull, every} from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$isNull = isNull
Vue.prototype.$every = every

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  store,
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
