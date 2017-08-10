import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  author: DS.attr(),
  content: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
