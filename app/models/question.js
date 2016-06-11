import Model from 'ember-data';

export default DS.Model.extend({
  writer: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
