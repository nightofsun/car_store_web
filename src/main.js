import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuelidate from 'vuelidate'
import {isEmpty, isNull, every} from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$isNull = isNull
Vue.prototype.$every = every

Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
