import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['episode-strip'],
  classNameBindings: ['preview']
});
