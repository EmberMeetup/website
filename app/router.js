import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('episodes');
  this.route('conferences');
  this.route('conference', { path: 'conferences/:slug' });
  this.route('pages', { path: 'pages/:slug' });
  this.route('videos', function() {});
  this.route('video', { path: 'videos/:slug' });
});

export default Router;
