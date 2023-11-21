import profileService from "../../service/profile";

const state = () => ({
    p: {},
})

// getters
const getters = {}

const actions = {
    async getProfile({ commit }, payload) {
        const userId = payload.userId;
        const profile = await profileService.getProfileData(userId)
        commit('setProfile', profile)
    }
}

// mutations
const mutations = {
    setProfile(state, profile) {
        state.p = profile
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}