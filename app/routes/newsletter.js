import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  afterModel() {
    this.get('headData').change({
      title: 'Newsletter'
    });
  }
});
