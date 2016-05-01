import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category', 'tag', 'episode', 'filters'],
  category: null,
  tag: null,
  episode: null,
  filters: false,
});
