import Vue from 'vue'
import Router from 'vue-router'
import * as pathConstant from '@/common/pathConstant'

const errorConnection = ()=> import('@/views/error/ErrorConnection.vue')
const serverError = ()=> import('@/views/error/ServerError.vue')
const viewCar = ()=> import('@/views/ViewCar.vue')
const editCar = ()=> import('@/views/EditCar.vue')
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: pathConstant.HOME_PATH,
            name: pathConstant.HOME_NAME,
            component: viewCar
        },
        {
            path: pathConstant.EDIT_CAR_PATH,
            name: pathConstant.EDIT_CAR_NAME,
            component: editCar
        },
        {
            path : pathConstant.ERROR_INTERNET_PATH,
            name: pathConstant.ERROR_INTERNET_NAME,
            component: errorConnection
        },
        {
            path : pathConstant.SERVER_ERROR_PATH,
            name: pathConstant.SERVER_ERROR_NAME,
            component: serverError
        },

    ]
}

export default router