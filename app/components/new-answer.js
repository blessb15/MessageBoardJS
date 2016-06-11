import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    answerFormShow(){
      this.set('newAnswerForm', true);
    },

    saveAnswer() {
      var params = {
        name: this.get('name'),
        solution: this.get('solution'),
        question: this.get('question'),
      };
      Ember.Logger.log(params);
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
