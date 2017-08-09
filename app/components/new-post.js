import Ember from 'ember';

export default Ember.Component.extend({
  newPost: false,
  actions: {
    postFormShow() {
      this.set('newPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
      };
      this.set('newPost', false);
      this.sendAction('savePost', params);
    }
  }
});
