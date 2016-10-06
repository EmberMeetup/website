import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),
  redirect() {
    this.transitionTo('show');
  },
  afterModel() {
    this.get('headData').change();
  }
});
