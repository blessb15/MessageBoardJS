import Model from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  solution: DS.attr(),
  question: DS.belongsTo('question', { async: true}),
  like: 0,
  dislike: 0,
});
