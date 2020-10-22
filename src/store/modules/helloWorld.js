const state = {
    message:"",
}

const mutations = {
    UPDATE_MESSAGE: (state,message) => {
        state.message = message;
    }
}

const actions = {
    updateMessage({ commit },message) {
        commit('UPDATE_MESSAGE',message)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}