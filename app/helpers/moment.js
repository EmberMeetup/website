import Ember from 'ember';
import moment from 'moment';

export function momentHelper([date]/*, hash*/) {
  return moment(date);
}

export default Ember.Helper.helper(momentHelper);
