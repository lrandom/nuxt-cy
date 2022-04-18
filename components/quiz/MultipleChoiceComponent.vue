<template>
  <div v-if="questionItem.type == 3">
    <h5 class="font-bold text-xl">{{ questionItem.question }}</h5>
    <label v-for="(answerItem,answerIndex) in questionItem.answers" :key="answerIndex">
      <input type="checkbox" v-model="answer" name="choice"
             :value="answerIndex">
      <span>{{ answerItem }}</span>
      <br>
    </label>

  </div>
</template>
<script>
import {mixins} from "./mixins";

export default {
  mixins: [mixins],
  data() {
    return {
      answer: []
    };
  }
}
</script>
