import Ember from 'ember';
import DS from 'ember-data';

const {
  hasMany,
  attr
} = DS;

export default Ember.Mixin.create({
  presenters: hasMany('presenter', {async: true}),
  presentationTopics: hasMany('presentation-topic', {async: true}),
  eventDate: attr('date'),
  duration: attr('number'),
  bigmarker: attr()
});
