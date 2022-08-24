import axios from "axios"
import store from "@/store"

const API = axios.create({
    baseURL: process.env.VUE_API_PATH ? process.env.VUE_API_PATH: 'http://localhost:8080',
    timeout: 30000
})

const handleResponse = res => res.data

const handleErrorResponse = (err, callback) => {
    let errorResponse = err.response
    if (errorResponse) {
        if (errorResponse.status === 408){
            store.dispatch('spinner/setCloseSpinner')
            callback(errorResponse)
        }
    }
}