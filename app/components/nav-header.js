import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings: ['isCollapsible'],
  isCollapsible: Ember.computed.or('media.isMobile', 'media.isTablet'),
  media: Ember.inject.service(),
  headData: Ember.inject.service()
});