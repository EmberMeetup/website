import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const { 
  hasMany, 
  attr 
} = DS;

export default Model.extend(PostMixin, {
  firstName: attr(),
  lastName: attr(),
  twitter: attr(),
  linkedin: attr(),
  presentationTopics: hasMany(),
  featured: attr()
});
