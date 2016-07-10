import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),

  model({season}) {
    return this.store.query('episode', {
      filter: {
        meta_query: [ { key: 'season', 'value': season } ]
      }
    });
  },

  afterModel() {
    this.get('headData').change({
      title: "The Ember Show",
      heroTitle: 'The Ember Show',
      classNames: 'the-ember-show hero-style',
      withHero: true
    });
  }
    
});
