import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Route.extend({
  
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  
  model({ page, type, slug }) {

    let filter = {
        meta_query: [ { key: 'has_video', 'value': 1 }]
      };
      
    if (!isEmpty(type) && !isEmpty(slug)) {
      if (type === 'category') {
        filter['category_name'] = slug;
      } else {
        filter['tag'] = slug;
      }
    }
    
    return this.store.query('presentation-topic', {
      filter,
      page
    });
  }
  
});
