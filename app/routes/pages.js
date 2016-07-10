import Ember from 'ember';

const {
  inject: { service },
  get
} = Ember;

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.queryRecordBySlug('page', slug);
  },

  afterModel(model) {
    this.get('headData').change({
      title: get(model, 'title')
    });
  }
    
});
