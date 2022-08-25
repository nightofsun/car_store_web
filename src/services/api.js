import axios from "axios"
import store from "@/store"
import router from "@/router"
import { SERVER_ERROR_PATH, ERROR_INTERNET_PATH } from "@/common/pathConstant"
import i18n from '@/lang/lang'
const API = axios.create({
    baseURL: process.env.VUE_API_PATH ? process.env.VUE_API_PATH: 'http://localhost:8080',
    timeout: 30000
})

const handleResponse = res => res.data

const handleErrorResponse = (err, callback) => {
    let errorResponse = err.response
    if (errorResponse) {
        if (errorResponse.status === 408 || err.code === 'ERR_NETWORK'){
            router.replace({ path: ERROR_INTERNET_PATH })
            store.dispatch('spinner/setCloseSpinner')
            callback(errorResponse)
        }
        else if(errorResponse.status===500){
            router.replace({ path: SERVER_ERROR_PATH })
            store.dispatch('spinner/setCloseSpinner')
            callback(errorResponse)
        }
        else {
            alert(i18n('error.exception'))
            store.dispatch('spinner/setCloseSpinner')
            callback(errorResponse)
        }
    }

}

export const request = async (type, path, data) => {
    let error = null
    let response = null
    var res
    try {
        switch (type) {
            case 'GET':
                res = await API.get(path, {params: data})
                break
            case 'POST':
                res = await API.post(path, data)
                break
            default:
                res = await API.get(path, {params: data})
        }
        response = handleResponse(res)
    }
    catch (e) {
        handleErrorResponse(e,e=>{
            if(e) {
                error = e
            }
        })
    } finally {
        return {
            error: error,
            result: response
        }
    }
}