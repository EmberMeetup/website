import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('episodes');
  this.route('episode', { path: 'episodes/:slug' });
  this.route('conference', { path: 'conferences/:slug' });
  this.route('pages', { path: 'pages/:slug' });
  this.route('videos');
  this.route('conferences');
  this.route('video');
});

export default Router;
