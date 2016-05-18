import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings: [':nav-header', 'isCollapsible', 'headData.classNames', 'withHero:with-hero:no-hero'],
  isCollapsible: Ember.computed.or('media.isMobile', 'media.isTablet'),
  media: Ember.inject.service(),
  headData: Ember.inject.service(),
  withHero: Ember.computed.notEmpty('headData.image')
});