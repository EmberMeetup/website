import Ember from 'ember';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';

const Router = Ember.Router.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('show', { path: 'the-ember-show' } );
  this.route('gemconf', function() {
    this.route('training');
    this.route('code-of-conduct');
  });
  this.route('past-gemconf', { path: 'gemconf/:slug' } );

  this.route('pages', { path: 'pages/:slug' });
  this.route('videos', function() {});
  this.route('video', { path: 'videos/:slug' });
  this.route('rock-and-roll-ember');

  this.route('tools', function() {
    this.route('thumbnails', function() {
      this.route('thumbnail', { path: ':slug' });
    });
  });
  this.route('newsletter');
  this.route('gemconfand');
});

export default Router;
