import Ember from 'ember';
import moment from 'moment';

export function momentAdd([date, amount, unit]/*, hash*/) {
  return moment(date).add(amount, unit);
}

export default Ember.Helper.helper(momentAdd);
