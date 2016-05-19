import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'hero-image',
  attributeBindings: ['style'],
  style: Ember.computed('image', function(){
    return `background-image: url(${this.get('image')})`;
  })
}).reopenClass({
  positionalParams: ['image']
});
