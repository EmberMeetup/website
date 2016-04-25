import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://embermeetup.com',
  namespace: 'wp-json/wp/v2'
});
