import Ember from 'ember';

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.query('presentation-topic', {
      filter: { name: slug }
    }).then(function(model){
      // TODO: replace this when is fixed https://github.com/emberjs/data/pull/4300#issuecomment-214479678
      return model.get('firstObject');
    });
  }
  
});
