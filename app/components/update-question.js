import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateFormShow(){
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        writer: this.get('writer'),
        content: this.get('content'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
