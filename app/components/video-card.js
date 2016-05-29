import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [
    ':video-card', 
    'show-footer:has-footer', 
    'isSmall:is-small:is-not-small', 
    'show-presenter:has-presenter',
    'show-flag:show-flag:no-flag'
  ],
  isSmall: computed.equal('size', 'small'),
  "show-presenter": true
}).reopenClass({
  positionalParams: ['model']
});
