<template>
  <div>
    {{ $store.state.productStore.products }}
    <button @click="getProducts()">Load Products</button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductList",
  computed: {
    //...mapState('productStore', ['products'])
  },
  methods: {
    //...mapActions('productStore', ['getProducts']),
    getProducts() {
      this.$store.dispatch('productStore/getProducts');
    }
  }
}
</script>

<style scoped>

</style>
