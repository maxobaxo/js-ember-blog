import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    updateFormShow() {
      this.set('updatePost', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('updatePost', false);
      this.sendAction('update', post, params);
    }
  }
});
