const state = {
    name: "",
    gearType: "",
    carType: "",
    brand: "",
    minPrice: "",
    maxPrice: ""
}
const getters = {
    getName(state) {
        return state.name
    },
    getGearType(state) {
        return state.gearType
    },
    getCarType(state) {
        return state.carType
    },
    getBrand(state) {
        return state.brand
    },
    getMinPrice(state) {
        return state.minPrice
    },
    getMaxPrice(state) {
        return state.maxPrice
    }
}
const actions = {
    setName: ({ commit }, payload) => {
        commit('SET_NAME', payload)
    },
    setGearType: ({ commit }, payload) => {
        commit('SET_GEAR_TYPE', payload)
    },
    setCarType: ({ commit }, payload) => {
        commit('SET_CAR_TYPE', payload)
    },
    setBrand: ({ commit }, payload) => {
        commit('SET_BRAND', payload)
    },
    setMinPrice: ({ commit }, payload) => {
        commit('SET_MIN_PRICE', payload)
    },
    setMaxPrice: ({ commit }, payload) => {
        commit('SET_MAX_PRICE', payload)
    }
}
const mutations = {
    SET_NAME(state, payload) {
        state.name = payload
    },
    SET_GEAR_TYPE(state, payload) {
        state.gearType = payload
    },
    SET_CAR_TYPE(state, payload) {
        state.carType = payload
    },
    SET_BRAND(state, payload) {
        state.brand = payload
    },
    SET_MIN_PRICE(state, payload) {
        state.minPrice = payload
    },
    SET_MAX_PRICE(state, payload) {
        state.maxPrice = payload
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}