import Ember from 'ember';

const {
  computed
} = Ember;

const REGEX = /[0-9]*$/;

export default Ember.Component.extend({
  classNames: ['responsive-vimeo-video'],
  
  isValidVimeoURL: computed.match('video', REGEX),
  
  vimeoId: computed('video', 'isValidVimeoURL', function(){
    if (this.get('isValidVimeoURL')) {
      return this.get('video').match(REGEX);
    }
  })
  
});
