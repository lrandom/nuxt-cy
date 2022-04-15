<template>
  <div>
    {{ counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    {{ homeData }}
    <button @click="getHome()">Get Home Data</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: "Counter",
  computed: {
    ...mapState(['counter', 'homeData'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    getHome() {
      this.$store.dispatch('getHome');
    }
  }
}
</script>

<style scoped>

</style>
