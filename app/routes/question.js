import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {

    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      Ember.Logger.log(params);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
