import Ember from 'ember';

const {
  inject: { service },
  get
} = Ember;

export default Ember.Route.extend({
  headData: service(),
  model({slug}) {
    return this.store.queryRecordBySlug('conference', slug);
  },
  afterModel(model) {
    this.get('headData').change({
      title: get(model, 'title'),
      image: get(model, 'featured.url'),
      'twitter:creator': 'EmberMeetup',
      withHero: true,
      heroTitle: get(model, 'heroTitle'),
      heroSubTitle: get(model, 'heroSubTitle'),
      classNames: `gemconf hero-style ${get(model, 'slug')}`,
      buttonUrl: "https://www.eventbrite.com/e/global-ember-meetup-conference-live-in-the-triangle-gemconf-tickets-22584175878",
      buttonText: "RSVP"
    });
  }
});
