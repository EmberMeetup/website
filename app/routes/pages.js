import Ember from 'ember';

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.queryRecord('page', {
      filter: { name: slug }
    });
  }
  
});
