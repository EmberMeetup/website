import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':video-card', 'isMedium'],
  
  size: 'medium',
  
  isMedium: computed.equal('size', 'medium')
});
