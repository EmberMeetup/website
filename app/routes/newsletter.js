import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    this.get('headData').change({
      title: 'Newsletter'
    });
  }
});
