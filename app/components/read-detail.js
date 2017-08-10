import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
