import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':box-callout', 'hasImage', 'imagePosition', 'isRed', 'isSkyBlue', 'isSky'],
  hasImage: computed.notEmpty('image'),
  imagePosition: computed('position', function(){
    let position = this.get('position');
    return position ? `image-on-${position}` : '';
  }),
  isRed: computed.equal('backgroundColor', 'red'),
  isSkyBlue: computed.equal('backgroundColor', 'skyBlue'),
  isSky: computed.equal('backgroundColor', 'sky')
});
