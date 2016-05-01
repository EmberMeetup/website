import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category', 'tag', 'episode'],
  category: null,
  tag: null,
  episode: null
});
