import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('show', { path: 'the-ember-show' } );
  this.route('gemconf', function() {
    this.route('training');
    this.route('code-of-conduct');
  });
  this.route('pages', { path: 'pages/:slug' });
  this.route('videos', function() {});
  this.route('video', { path: 'videos/:slug' });

  this.route('tools', function() {
    this.route('thumbnails', function() {
      this.route('thumbnail', { path: ':slug' });
    });
  });
  this.route('newsletter');
});

export default Router;
