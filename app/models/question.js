import Model from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  writer: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
