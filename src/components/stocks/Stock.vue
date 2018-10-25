<template>
  <b-card class="my-card">
    <p class="card-title">
      {{stock.name}}
      <small>(Price: {{stock.price}})</small>
    </p>
    <p class="card-text">
      <input type="number" class="form-control" placeholder="Quantity" :class="{danger: insufficientFunds}" v-model="quantity">
    </p>
    <div class="right">
      <b-button @click="buyStock" :disabled="insufficientFunds || quantity <= 0">
        {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
      </b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
};
</script>


<style scoped>
.danger {
  border: 1px solid red;
}

.my-card {
  margin: 0 15px 0 15px;
  width: 240px;
}

.card-title {
  font-weight: bold;
}

.right {
  float: right;
}
</style>