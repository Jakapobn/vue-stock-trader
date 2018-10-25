<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
  
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
    <b-navbar-brand to="/">Stock Trader</b-navbar-brand>
  
    <b-collapse is-nav id="nav_collapse">
  
      <b-navbar-nav>
        <b-nav-item to="/portfolio" activeClass="active" tag="li">Portfolio</b-nav-item>
        <b-nav-item to="/stocks" activeClass="active" tag="li">Socks</b-nav-item>
      </b-navbar-nav>
  
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="endDay">End Day</b-nav-item>
  
        <b-nav-item-dropdown text="Save & Load" right>
          <b-dropdown-item @click="saveData">Save</b-dropdown-item>
          <b-dropdown-item @click="loadData">Load</b-dropdown-item>
        </b-nav-item-dropdown>
  
        <strong class="text-funds">Funds: {{funds | currency}}</strong>
      </b-navbar-nav>
  
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.text-funds {
  color: white;
  text-align: center;
  padding: 8px;
}
</style>

