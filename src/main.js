// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store/store';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-jkk.firebaseio.com/';

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
