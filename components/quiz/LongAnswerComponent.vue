<template>
  <div v-if="questionItem.type == 2">
    <label>
      <h5 class="font-bold text-xl">{{ questionItem.question }}</h5>
      <br>
      <textarea class="border w-56" v-model="answer"></textarea>
    </label>
  </div>
</template>
<script>
import {mixins} from "./mixins";

export default {
  mixins: [mixins]
}
</script>
