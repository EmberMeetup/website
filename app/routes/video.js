import Ember from 'ember';
import { vimeoPlayerUrl } from 'embermeetup/helpers/vimeo-player-url';

const {
  inject: { service },
  get
} = Ember;

export default Ember.Route.extend({
  headData: service(),
  model({slug}) {
    return this.store.queryRecordBySlug('presentation-topic', slug);
  },
  afterModel(model) {
    this.get('headData').change({
      title: get(model, 'title'),
      image: model.featured.url,
      'twitter:creator': get(model, 'presenter.twitter'),
      'twitter:player': vimeoPlayerUrl(get(model, 'vimeo')),
      'twitter:card': 'player'
    });
  }
});