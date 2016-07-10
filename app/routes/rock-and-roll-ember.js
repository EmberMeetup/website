import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  headData: service(),
  afterModel() {
    this.get('headData').change({
      title: 'Rock and Roll with Ember.js',
      withHero: true,
      heroImage: "assets/images/RARE-Logo.png",
      heroSubTitle: "Complete hands-on introduction to authentication in Ember.js applications",
      classNames: "rock-and-roll-ember"
    });
  }
});
