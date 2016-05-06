import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Component.extend({
  headData: inject.service()
});
