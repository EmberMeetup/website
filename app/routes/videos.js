import Ember from 'ember';

const {
  RSVP,
  getProperties
} = Ember;

export default Ember.Route.extend({
  
  queryParams: {
    category: {
      refreshModel: true
    },
    tag: {
      refreshModel: true
    }
  },
  
  isFirstTime: true,
  
  model(params) {
    
    if ( this.get('isFirstTime') ) {
      this.set('isFirstTime', false);
      
      return RSVP.hash({
        categories: this.store.findAll('category'),
        tags: this.store.peekAll('tag'),
        params
      });
    }
    
    return RSVP.hash({
      categories: this.store.peekAll('category'),
      tags: this.store.peekAll('tag'),
      params
    });
  },
  
  actions: {
    
    updateFilter(item) {
      let {slug, type} = getProperties(item, 'slug', 'type');
      
      this.transitionTo({ queryParams: { [type]: slug, page: 1 } });
    }
    
  }
});
