import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: ' YoLoHagoBolivia',
    logo: require('../assets/images/logo.png'),
    darklogo:require('../assets/images/logo-white.png'),
    token: null,
    mode: {
      dark: localStorage.getItem('dark') === 'false' ? false : true,
      rtl: localStorage.getItem('rtl') === 'false' ? false : true,
    },
    namespaced: true,
    user:{
      name:'Bill Yerds',
      image:require('../assets/images/user/1.jpg'),
    },
    isLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isLoggedIn = true; // Actualiza el estado de isLoggedIn a true
    },
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    resetState(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
    layoutModeCommit (state, payload) {
      if (payload.dark !== undefined) {
        state.mode.dark = payload.dark
        localStorage.setItem('dark', payload.dark)
        const body = document.querySelector('body')
        if (payload.dark) {
          state.logo = require('../assets/images/logo-white.png')
          body.classList.add('dark')
        } else {
          state.logo = require('../assets/images/logo.png')
          body.classList.remove('dark')
        }
      }

      if(payload.rtl !== undefined) {
        state.mode.rtl = payload.rtl
        localStorage.setItem('rtl', payload.rtl)
        if (payload.rtl) {
            document.body.parentElement.setAttribute('dir','rtl')
        } else {
            document.body.parentElement.setAttribute('dir','ltr')
        }
      }
    }
    
  },
  actions: {
    saveToken({ commit }, token) {
      localStorage.setItem('token', token);
      commit('setToken', token);
    },
    layoutModeAction (context, payload) {
      context.commit('layoutModeCommit', payload)
    }
  },
  getters: {
    appName: state => { return state.appName },
    logo: state => { return state.logo },
    darklogo: state => { return state.darklogo },
    image1: state => { return state.user.image },
    name: state => { return state.user.name },
    image2:state => { return state.user.image2},
    image3:state => { return state.user.image3},
    dark: state => { return state.mode.dark },
    rtl:  state => { return state.mode.rtl },
  },
  modules: {
  }
})
