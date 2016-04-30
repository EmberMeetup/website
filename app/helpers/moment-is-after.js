import Ember from 'ember';
import moment from 'moment';

export function momentIsAfter([ref, date]/*, hash*/) {
  return moment(ref).isAfter(moment(date));
}

export default Ember.Helper.helper(momentIsAfter);
