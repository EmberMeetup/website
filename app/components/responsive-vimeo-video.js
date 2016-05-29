import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['responsive-vimeo-video']
}).reopenClass({
  positionalParams: ['video']
});
