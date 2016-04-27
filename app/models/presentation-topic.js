import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const { 
  belongsTo, 
  attr
} = DS;

export default Model.extend(PostMixin, {
  presenter: belongsTo('presenter', { async: true }),
  duration: attr('number'),
  vimeo: attr()
});
