import Ember from 'ember';

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.queryRecord('episode', {
      filter: { name: slug }
    });
  }
  
});
