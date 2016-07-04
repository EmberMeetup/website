import Ember from 'ember';

const {
  computed: { alias, and, or },
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings:  [':nav-header', 'isCollapsible', 'headData.classNames', 'withHero:with-hero:no-hero'],

  media:              service(),
  headData:           service(),
  
  withHero:           alias('headData.withHero'),
  withButton:         and('headData.buttonUrl', 'headData.buttonText'),
  isCollapsible:      or('media.isMobile', 'media.isTablet')  
});