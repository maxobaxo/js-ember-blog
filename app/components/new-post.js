import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
      };
      this.set('addNewPost', false);
      this.set('title', "");
      this.set('body', "");
      this.sendAction('savePost', params);
    }
  }
});
