import Ember from 'ember';
import moment from 'moment';

export function momentSubstract([date, amount, unit]/*, hash*/) {
  return moment(date).subtract(amount, unit);
}

export default Ember.Helper.helper(momentSubstract);
