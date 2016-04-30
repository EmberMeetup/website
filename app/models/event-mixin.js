import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  hasMany
} = DS;

export default Ember.Mixin.create({
  presenters: hasMany('presenter', {async: true}),
  presentationTopics: hasMany('presentation-topic', {async: true}),
  eventDate: attr('pods-datetime'),
  duration: attr('number'),
  bigmarker: attr()
});
