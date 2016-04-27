import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const { 
  belongsTo, 
  attr,
  hasMany
} = DS;

export default Model.extend(PostMixin, {
  presenter: belongsTo('presenter', {async: true}),
  duration: attr('number'),
  vimeo: attr(),
  featured: attr(),
  categories: hasMany(),
  postTags: hasMany('post-tag')
});
