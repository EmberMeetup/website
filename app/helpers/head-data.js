import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Helper.extend({

  headData: inject.service(),
  compute(params, hash) {
    this.get('headData').change(hash);
  }
  
});
