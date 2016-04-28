import Ember from 'ember';

export default Ember.Route.extend({
  
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  
  model({ page }) {
    return this.store.query('presentation_topic', {
      filter: {
        meta_query: [ { key: 'has_video', 'value': 1 }]
      },
      page
    });
  }
  
});
