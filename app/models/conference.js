import DS from 'ember-data';
import Model from 'ember-data/model';
import EventMixin from './event-mixin';
import PostMixin from './post-mixin';

const {
  attr,
  hasMany
} = DS;

export default Model.extend(EventMixin, PostMixin, {
  eventbrite: attr(),
  sidebar: attr(),
  sponsors: hasMany(),
  heroTitle: attr(),
  heroSubTitle: attr()
});
