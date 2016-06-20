import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {
    remove(favorite) {
      this.get('favoriteQuestion').remove(favorite);
    }
  }
});
