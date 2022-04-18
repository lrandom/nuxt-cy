<template>
  <div class="container mx-auto px-10" v-if="questions">
    <div v-for="(questionItem,questionIndex) in questions" :key="questionIndex">
      <SingleChoiceComponent :question-index="questionIndex"
                             :question-item="questionItem"/>

      <MultipleChoiceComponent :question-item="questionItem" :question-index="questionIndex"/>

      <LongAnswerComponent :question-index="questionIndex"
                           :question-item="questionItem"/>

      <SingleSelectComponent :question-item="questionItem" :question-index="questionIndex"/>

    </div>

    <nuxt-link to="/result">Submit</nuxt-link>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import SingleChoiceComponent from "../components/quiz/SingleChoiceComponent";
import MultipleChoiceComponent from "../components/quiz/LongAnswerComponent";
import LongAnswerComponent from "../components/quiz/MultipleChoiceComponent";
import SingleSelectComponent from "../components/quiz/SingleSelectComponent";

export default {
  name: "Quiz",
  components: {SingleSelectComponent, LongAnswerComponent, MultipleChoiceComponent, SingleChoiceComponent},
  computed: {
    ...mapState('homeStore', ['questions'])
  },
  methods: {
    ...mapMutations('homeStore', ['initAnswer'])
  },
  mounted() {
      this.initAnswer();
  }
}
</script>

