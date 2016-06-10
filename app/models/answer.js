import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', { async: true})
});
