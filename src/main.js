import '@babel/polyfill'
import 'mutationobserver-shim'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from './router'
import store from './views/frontend/store/index'
import './directives'
Vue.config.productionTip = false

/* Verificación del token en localstore */
// if (token) {
//   store.commit('setToken', token);
//   store.commit('setLoggedIn', true);
// }

/* Middleware de rutas */
// router.beforeEach((to, from, next) => {
//   const token = store.state.token;
//   console.log(token)
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//     if (!token) {
//       console.log('sin token');
//       next({ name: 'login' });
//     } else {
//       next();
//       console.log('con token');

//     }
//   } else {
//     next();
//     console.log('sin proteger');

//   }
// });

 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
