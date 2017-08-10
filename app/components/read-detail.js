import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});
