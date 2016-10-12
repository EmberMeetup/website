import Ember from 'ember';

const {
  RSVP,
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),

  model() {
    let lastEpisodes = this.store.query('episode', {
      filter: {
        'posts_per_page': 1
      }
    });
    let featuredVideos = this.store.query('episode', {
      filter: {
        'posts_per_page': 6
      }
    });
    return RSVP.hash({
      lastEpisodes,
      featuredVideos
    });
  },

  afterModel() {
    this.get('headData').change();
  }
});
