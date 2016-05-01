import Ember from 'ember';

const {
  RSVP,
  get
} = Ember;

export default Ember.Route.extend({
  
  queryParams: {
    category: {
      refreshModel: true
    },
    tag: {
      refreshModel: true
    },
    episode: {
      refreshModel: true
    }
  },
  
  isFirstTime: true,
  
  model(params) {
    
    if ( this.get('isFirstTime') ) {
      this.set('isFirstTime', false);
      
      return RSVP.hash({
        categories: this.store.findAll('category'),
        tags: this.store.findAll('tag'),
        episodes: this.store.findAll('episode'),
        params
      });
    }
    
    return RSVP.hash({
      categories: this.store.peekAll('category'),
      tags: this.store.peekAll('tag'),
      episodes: this.store.peekAll('episode'),
      params
    });
  }
});
