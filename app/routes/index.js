import Ember from 'ember';

const {
  RSVP,
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),

  model() {
    let lastEpisodes = this.store.query('episode', {
      page: 1,
      'per_page': 1
    });

    let featuredVideos = this.store.query('presentation-topic', {
      filter: {
        meta_query: [ { key: 'has_video', 'value': 1 } ]
      },
      page: 1,
      'per_page': 6
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
