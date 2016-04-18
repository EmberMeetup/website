import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':box-callout', 'hasImage', 'imagePosition', 'isRed'],
  hasImage: Ember.computed.notEmpty('image'),
  imagePosition: Ember.computed('position', function(){
    let position = this.get('position');
    return position ? `image-on-${position}` : '';
  }),
  isRed: Ember.computed.equal('backgroundColor', 'red')
});
