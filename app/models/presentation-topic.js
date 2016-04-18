import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

const {
  belongsTo,
  attr
} = DS;

export default PostModel.extend({
  presenter: belongsTo('presenter', {async: true}),
  duration: attr('number'),
  vimeo: attr()
});
