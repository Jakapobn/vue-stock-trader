<template>
  <b-container class="bv-example-row">
    <b-row cols="6" md="3">
      <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

