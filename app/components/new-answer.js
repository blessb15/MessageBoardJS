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
        answer: this.get('answer'),
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
