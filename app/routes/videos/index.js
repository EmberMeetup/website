import Ember from 'ember';

const {
  isEmpty,
  get
} = Ember;

export default Ember.Route.extend({
  
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  
  model({ page }) {
    
    let { category, tag, episode } = this.paramsFor('videos');

    if (!isEmpty(episode)) {
      return this.store.queryRecordBySlug('episode', episode)
        .then((episode = {})=>{
          return get(episode, 'presentationTopics');
        });
    }

    let filter = {
        meta_query: [ { key: 'has_video', 'value': 1 } ]
      };
    
    if (!isEmpty(category)) {
      filter['category_name'] = category;
    }
    
    if (!isEmpty(tag)) {
      filter['tag'] = tag;
    }
    
    return this.store.query('presentation-topic', {
      filter,
      page,
      per_page: 9
    });
  }
  
});
