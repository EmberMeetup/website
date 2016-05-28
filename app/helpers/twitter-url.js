import Ember from 'ember';

export function twitterUrl([handle]/*, hash*/) {
  return `https://twitter.com/${handle}`;
}

export default Ember.Helper.helper(twitterUrl);
