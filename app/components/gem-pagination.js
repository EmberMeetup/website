import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['gem-pagination'],
  
  next: computed('page', function(){
    return this.get('page') + 1;
  }),
  
  hasNext: computed('next', function(){
    return this.get('next') <= this.get('total-pages');
  }),
  
  previous: computed('page', function(){
    return this.get('page') - 1;
  }),
  
  hasPrevious: computed('previous', function(){
    return this.get('previous') > 0;
  }) 
  
});
