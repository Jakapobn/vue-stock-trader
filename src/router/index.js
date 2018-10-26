import Home from '@/components/Home.vue';
import Portfolio from '@/components/portfolio/Portfolio.vue';
import Stocks from '@/components/stocks/Stocks.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: '/vue-stock-trader',
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
  ]
});
