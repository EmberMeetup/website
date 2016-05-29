import Ember from 'ember';
import moment from 'moment';

export function momentIsBefore([ref, date]/*, hash*/) {
  return moment(ref).isBefore(moment(date));
}

export default Ember.Helper.helper(momentIsBefore);
