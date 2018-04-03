import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
  },
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
