import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [
    ':gem-topics--topic',
    'is-small:is-small:is-regular'
  ]
});
