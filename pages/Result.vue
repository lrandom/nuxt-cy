<template>
    <div v-if="results">
      <div v-for="(resultItem,resultIndex) in results">
        <h5 class="font-bold text-xl">{{resultItem.question.question}}</h5>
        <div v-if="resultItem.state==1">Đúng</div>
        <div v-if="resultItem.state==2">Sai</div>
        <div v-if="resultItem.state==3">Bạn chưa trả lời</div>

      </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "Result.vue",
  computed: {
    ...mapState('homeStore', ['results'])
  },
  methods:{
    ...mapMutations('homeStore',['calculatorResult'])
  },
  mounted() {
    this.calculatorResult();
  }
}
</script>

<style scoped>

</style>
