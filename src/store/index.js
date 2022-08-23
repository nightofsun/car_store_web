import Vue from "vue"
import Vuex from "vuex"

import {
    car,
    filter,
    spinner
} from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        car,
        filter,
        spinner
    }
})