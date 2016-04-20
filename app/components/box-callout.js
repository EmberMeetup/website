import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':box-callout', 'hasImage', 'imagePosition', 'isRed', 'isBlue'],
  hasImage: computed.notEmpty('image'),
  imagePosition: computed('position', function(){
    let position = this.get('position');
    return position ? `image-on-${position}` : '';
  }),
  isRed: computed.equal('backgroundColor', 'red'),
  isBlue: computed.equal('backgroundColor', 'blue')
});
