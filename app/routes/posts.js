import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('admin');
    }
  }
});
