import Ember from 'ember';
import injectScript from 'ember-inject-script';

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.query('conference', {
      filter: { name: slug }
    }).then(function(model){
      // TODO: replace this when is fixed https://github.com/emberjs/data/pull/4300#issuecomment-214479678
      return model.get('firstObject');
    });
  },
  
  afterModel() {
    return injectScript('//builds.emberjs.com/release/ember-template-compiler.js');
  }
  
});
