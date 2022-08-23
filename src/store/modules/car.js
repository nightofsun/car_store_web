const state = {
    carList: [],
    showStartAt: 0,
    showEndAt: 0,
    totalCar: 0,
    totalPage: 0
}
const getters = {
    getCarList: (state) => {
        return state.carList
    },
    getShowStartAt: (state) => {
        return state.showStartAt
    },
    getShowEndAt: (state) => {
        return state.showEndAt
    },
    getTotalCar: (state) => {
        return state.totalCar
    },
    getTotalPage: (state) => {
        return state.totalPage
    }
}
const actions = {
    setCarList: ({ commit }, payload) => {
        commit('SET_CAR_LIST', payload)
    },
    setShowStartAt: ({ commit }, payload) => {
        commit('SET_SHOW_START_AT', payload)
    },
    setShowEndAt: ({ commit }, payload) => {
        commit('SET_SHOW_END_AT', payload)
    },
    setTotalCar: ({ commit }, payload) => {
        commit('SET_TOTAL_CAR', payload)
    },
    setTotalPage: ({ commit }, payload) => {
        commit('SET_TOTAL_PAGE', payload)
    },
}
const mutations = {
    SET_CAR_LIST(state,payload){
        state.carList = payload
    },
    SET_SHOW_START_AT(state,payload){
        state.showStartAt = payload
    },
    SET_SHOW_END_AT(state,payload){
        state.showEndAt = payload
    },
    SET_TOTAL_CAR(state,payload){
        state.totalCar = payload
    },
    SET_TOTAL_PAGE(state,payload){
        state.totalPage = payload
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}