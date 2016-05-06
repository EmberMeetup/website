import Ember from 'ember';

const {
  inject,
  get,
  Route
} = Ember;

export default Route.extend({
  
  headData: inject.service(),
  
  model({slug}) {
    return this.store.query('conference', {
      filter: { name: slug }
    }).then(function(model){
      // TODO: replace this when is fixed https://github.com/emberjs/data/pull/4300#issuecomment-214479678
      return model.get('firstObject');
    });
  },
  
  afterModel(model) {
    this.set('headData.title', get(model, 'title'));
  }
  
});
