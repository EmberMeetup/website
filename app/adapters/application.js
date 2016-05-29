import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'https://embermeetup.com',
  namespace: 'wp-json/wp/v2',
  findAll(store, type) {
    const url = this.buildURL(type.modelName, null, null, 'findAll');
    
    return this.ajax(url, 'GET', { data: { filter: { posts_per_page: 100 } } });
  }
});
