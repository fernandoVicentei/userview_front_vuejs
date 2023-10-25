// store/modules/auth.js
const state = {
    token: null,
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
};

const actions = {
    saveToken({ commit }, token) {
        commit('setToken', token);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
