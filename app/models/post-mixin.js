import Ember from 'ember';
import DS from 'ember-data';

const {
  attr
} = DS;

export default Ember.Mixin.create({
  title: attr(),
  slug: attr(),
  content: attr(),  
  date: attr('date'),
  dateGmt: attr('date'),
  excerpt: attr(),
  featured: attr(),
  modified: attr('date')
});