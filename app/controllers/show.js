import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  queryParams: ['season'],
  season: parseInt(moment().format('YYYY'), 10) % 2014
});
