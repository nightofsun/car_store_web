const state = {
    isSpinner: false,
    spinnerBackdrop: ''
}
const getters = {
    getIsSpinner: (state)=>{
        return state.isSpinner
    },
    getSpinnerBackdrop: (state)=>{
        return state.spinnerBackdrop
    }
}
const actions = {
    setOpenSpinner: ({commit})=>{
        commit('SET_IS_SPINNER', true)
        commit('SET_SPINNER_BACKDROP', 'spinner-backdrop')
    },
    setCloseSpinner: ({commit})=>{
        commit('SET_IS_SPINNER', false)
        commit('SET_SPINNER_BACKDROP', '')
    }
}
const mutations = {
    SET_IS_SPINNER(state,payload){
        state.isSpinner = payload
    },
    SET_SPINNER_BACKDROP(state,payload){
        state.spinnerBackdrop = payload
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}