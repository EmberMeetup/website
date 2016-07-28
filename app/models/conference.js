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
  communityLeads: hasMany('presenter'),
  heroTitle: attr(),
  heroSubTitle: attr(),
  sponsors: hasMany(),
  goldSponsors: hasMany('sponsor'),
  silverSponsors: hasMany('sponsor'),
  bronzeSponsors: hasMany('sponsor'),    
});
