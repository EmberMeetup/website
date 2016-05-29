import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':video-card', 'hasFooter'],
  hasFooter: false
}).reopenClass({
  positionalParams: ['model']
});
