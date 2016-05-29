import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const { 
  belongsTo, 
  attr,
  hasMany
} = DS;

const {
  computed: { notEmpty }
} = Ember;

export default Model.extend(PostMixin, {
  presenter: belongsTo(),
  duration: attr('number'),
  vimeo: attr(),
  related: hasMany('presentation-topic'),
  episode: belongsTo(),
  conference: belongsTo(),
  hasVideo: notEmpty('vimeo')  
});
