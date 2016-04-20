import Ember from 'ember';
import injectScript from 'ember-inject-script';

const {
  RSVP
} = Ember;

export default Ember.Route.extend({
  
  model({slug}) {
    return this.store.queryRecord('conference', {
      filter: { name: slug }
    });
  },
  afterModel(model) {
    return RSVP.all([
      injectScript('//builds.emberjs.com/release/ember-template-compiler.js'), 
      model.get('presentationTopics'), 
      model.get('presenters'), 
      model.get('sponsors')]
    );
  }
  
});
