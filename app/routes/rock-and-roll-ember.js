import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),
  afterModel() {
    this.get('headData').change({
      title: 'Rock and Roll with Ember.js',
      withHero: false
    });
  }
});
