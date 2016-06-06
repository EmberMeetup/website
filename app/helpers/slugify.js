import Ember from 'ember';

export function slugify([value]/*, hash*/) {
  return `${value}`.camelize().dasherize();
}

export default Ember.Helper.helper(slugify);
