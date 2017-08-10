import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveComment', params);
    }
  }
});
