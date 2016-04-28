import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'type', 'slug'],
  page: 1
});
