import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {

    // likeIt(answer){
    //   console.log(answer.name);
    //   var likes = parseInt(answer.like);
    //   console.log(likes);
    //   likes++;
    // },

    likeIt(answer) {
      console.log(answer.like);
      answer.like ++;
      console.log(answer.like)
      answer.save();

    },

    saveAnswer(params){
      console.log(params)
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
      console.log(question)
      question.destroyRecord();
      this.transitionTo('index');
    },
  }
});
