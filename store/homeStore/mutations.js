export default {
  initAnswer(state) {
    state.answers = new Array(state.questions.length);
  },
  setAnswer(state, payload) {
    const answers = state.answers;
    state.answers[payload.index] = payload.answer;
  /*  answers.findIndex(answer => answer.index === payload.index) != -1
      ? answers.find(answer => answer.index === payload.index).answer = payload.answer : answers.push(payload);*/
    state.answers = answers
  },
  removeAnswer(state, payload) {
    const answers = state.answers;
    state.answers[payload.index] = undefined;
    //answers.splice(answers.findIndex(answer => answer.index === payload.index), 1);
    state.answers = answers
  },
  calculatorResult(state) {
    const checkResult = [];
    //state
    //1: trả lời đunmgs
    //2: trà lời sai
    //3: không trả lời
    for (let i = 0; i < state.questions.length; i++) {
      if (state.answers[i]) {
        //người dùng đã trả lời
        if (state.questions[i].type == 1 || state.questions[i].type == 4) {
          if (state.answers[i] == state.questions[i].correct) {
            checkResult.push({
              question: state.questions[i],
              state: 1
            });
          } else {
            checkResult.push({
              question: state.questions[i],
              state: 2
            });
          }
          continue
        }

        if (state.questions[i].type == 2) {
          const corrects = state.questions[i].correct.split(',');
          const answer = state.answers[i];
          console.log(corrects);
          const everyExist = corrects.every(item => answer.trim().includes(item.trim()));
          if (everyExist) {
            checkResult.push({
              question: state.questions[i],
              state: 1
            });
          } else {
            checkResult.push({
              question: state.questions[i],
              state: 2
            });
          }
          continue;
        }

        if (state.questions[i].type == 3) {
          const correct = state.questions[i].correct.sort((item1, item2) => item2 - item1).join('');
          const answer = state.answers[i].sort((item1, item2) => item2 - item1).join('');

          if (correct == answer) {
            checkResult.push({
              question: state.questions[i],
              state: 1
            });
          } else {
            checkResult.push({
              question: state.questions[i],
              state: 2
            });
          }
          continue
        }


      } else {
        //người dùng chưa trả lời
        checkResult.push({
          question: state.questions[i],
          state: 3
        });
      }
    }

    state.results = checkResult;
  }
}
