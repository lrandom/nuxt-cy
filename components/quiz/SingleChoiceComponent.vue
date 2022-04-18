<template>
  <div v-if="questionItem.type == 1">
    <h5 class="font-bold text-xl">{{ questionItem.question }}</h5>
    <label class="block" v-for="(answerItem,answerIndex) in questionItem.answers">
      <input type="radio" v-model="answer" :name="questionItem.question+questionIndex" :value="answerIndex">
      <span>{{ answerItem }}</span>
    </label>
  </div>
</template>
<script>
import {mixins} from "./mixins";

export default {
  mixins: [mixins]
}
</script>
