import { request } from "./api"
import * as pathConstant from '@/common/pathConstant'

import router from "@/router"
import store from "@/store"
import {SERVER_ERROR_PATH} from '@/common/pathConstant'
import { isEmpty, isInteger } from "lodash"
export async function getCarList() {
    const {error, result} = await request('POST',pathConstant.API_GET_CAR_LIST,{
        name: store.getters['filter/getName'],
        gearType: store.getters['filter/getGearType'],
        carType: store.getters['filter/getCarType'],
        brand: store.getters['filter/getBrand'],
        minPrice: store.getters['filter/getMinPrice'],
        maxPrice: store.getters['filter/getMaxPrice'],
        sortType: store.getters['filter/getSortBy'],
        page: store.getters['filter/getPage']
    })
    if (result) {
        if (!isEmpty(result.carList)){
            store.dispatch('car/setCarList', result.carList)
        }
        else {
            store.dispatch('car/setCarList', [])
        }
        if (isInteger(result.carCount)){
            store.dispatch('car/setTotalCar', result.carCount)
        }
        else {
            store.dispatch('car/setTotalCar', 0)
        }
        if (isInteger(result.totalPage)){
            store.dispatch('car/setTotalPage', result.totalPage)
        }
        else {
            store.dispatch('car/setTotalPage', 0)
        }
        if (isInteger(result.startAt)){
            store.dispatch('car/setShowStartAt', result.startAt)
        }
        else {
            store.dispatch('car/setShowStartAt', 0)
        }
        if (isInteger(result.endAt)){
            store.dispatch('car/setShowEndAt', result.endAt)
        }
        else {
            store.dispatch('car/setShowEndAt', 0)
        }
    }
}

export async function updateCar(payload) {
    const {error, result} = await request('POST',pathConstant.API_UPDATE_CAR,payload)
}

export async function createCar(payload) {
    const {error, result} = await request('POST',pathConstant.API_CREATE_NEW_CAR,payload)
}

export async function deleteCar(payload) {
    const {error, result} = await request('POST',pathConstant.API_DELETE_CAR,payload)
}