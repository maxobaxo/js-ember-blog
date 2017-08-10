import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params)
    },
    delete(comment) {
      if(confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
  }
});
