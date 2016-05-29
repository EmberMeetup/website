import Ember from 'ember';
import moment from 'moment';

export function momentTzGuess([format]/*, hash*/) {
  let guess = moment.tz.guess();
  return moment.tz(moment(), guess).format(format);
}

export default Ember.Helper.helper(momentTzGuess);
