import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('posts', {path: '/posts/:post_id'});
  this.route('read-post', {path: '/read-post/:post_id'});
});

export default Router;
