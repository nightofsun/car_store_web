const state = {
    name: "",
    gearType: "",
    carType: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "0",
    page: "1"
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
    },
    getSortBy(state) {
        return state.sortBy
    },
    getPage(state) {
        return state.page
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
    },
    setSortBy: ({ commit }, payload) => {
        commit('SET_SORT_BY', payload)
    },
    setPage: ({ commit }, payload) => {
        commit('SET_PAGE', payload)
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
    },
    SET_SORT_BY(state, payload) {
        state.sortBy = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}