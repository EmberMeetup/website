import Ember from 'ember';

export default Ember.Route.extend({
  
  model({season}) {
    return this.store.query('episode', {
      filter: {
        meta_query: [ { key: 'season', 'value': season } ]
      }
    });
  }
  
});
