<template>
    <b-card class="my-card">
        <p class="card-title">
            {{stock.name}}
            <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
        </p>
        <p class="card-text">
            <input type="number" class="form-control" placeholder="Quantity" :class="{danger: insufficientFunds}" v-model="quantity">
        </p>
        <div class="right">
            <b-button @click="sellStock" :disabled=" insufficientFunds || quantity <= 0">
                {{insufficientFunds? 'Not enough Stocks' : 'Sell'}}
            </b-button>
        </div>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientFunds() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ placeSellOrder: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      this.placeSellOrder(order);
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