import {mapMutations} from "vuex";

export const mixins = {
  props: {
    questionIndex: {},
    questionItem: {}
  },
  data() {
    return {
      answer: ''
    };
  },
  methods: {
    ...mapMutations('homeStore', ['setAnswer', 'removeAnswer'])
  },
  watch: {
    answer(newValue) {
      if (newValue) {
        this.setAnswer({
          answer: newValue,
          index: this.questionIndex,
          type: this.questionItem.type
        });
      }
      if ((this.questionItem.type == 3 && newValue.length == 0) || (this.questionItem.type == 2 && !newValue)) {
        this.removeAnswer({
          index: this.questionIndex,
          type: this.questionItem.type
        });
      }
    }
  }
}
