import Vuex from 'vuex'
import Vue from 'vue'
import profile from './modules/profile'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        profile
    },
    strict: debug,
})