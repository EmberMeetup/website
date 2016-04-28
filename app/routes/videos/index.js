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
  
  model({ page }) {

    let filter = {
        meta_query: [ { key: 'has_video', 'value': 1 } ]
      };

    let { category, tag } = this.paramsFor('videos');
    
    if (!isEmpty(category)) {
      filter['category_name'] = category;
    }
    
    if (!isEmpty(tag)) {
      filter['tag'] = tag;
    }
    
    return this.store.query('presentation-topic', {
      filter,
      page
    });
  }
  
});
