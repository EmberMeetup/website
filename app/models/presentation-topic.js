import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const { 
  belongsTo, 
  attr,
  hasMany
} = DS;

export default Model.extend(PostMixin, {
  presenter: belongsTo('presenter'),
  duration: attr('number'),
  vimeo: attr(),
  related: hasMany('presentation-topic')
});
