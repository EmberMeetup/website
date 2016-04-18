import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':box-content', 'hasImage'],
  hasImage: Ember.computed.notEmpty('image')
});
