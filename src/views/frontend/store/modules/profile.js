import profileService from "../../service/profile";

const state = () => ({
    profile: {},
})

const actions = {
    async getProfile({ commit }) {
        const profile = await profileService.getProfileData(1)
        commit('setProfile', profile)
    }
}

export default {
    namespaced: true,
    state,
    actions,
  }