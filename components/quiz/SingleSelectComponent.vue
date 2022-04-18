<template>
  <div v-if="questionItem.type == 4">
    <h5 class="font-bold text-xl">{{ questionItem.question }}</h5>
    <select class="border p-2" v-model="answer">
      <option v-for="(answerItem,answerIndex) in questionItem.answers" :key="answerIndex" :value="answerIndex" >
        {{ answerItem }}
      </option>
    </select>
  </div>
</template>
<script>
import {mixins} from "./mixins";
export default {
  mixins:[mixins]
}
</script>
