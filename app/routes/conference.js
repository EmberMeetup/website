import Ember from 'ember';
import injectScript from 'ember-inject-script';

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.queryRecord('conference', {
      filter: { name: slug }
    });
  },
  afterModel() {
    return injectScript('//builds.emberjs.com/release/ember-template-compiler.js');
  }
  
});
