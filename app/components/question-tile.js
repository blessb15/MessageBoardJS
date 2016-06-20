import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  favoriteQuestion: Ember.inject.service(),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToFavorites(favorite) {
      this.get('favoriteQuestion').add(favorite);
    },
  }
});
