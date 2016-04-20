import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

const {
  hasMany,
  attr
} = DS;

export default PostModel.extend({
  firstName: attr(),
  lastName: attr(),
  twitter: attr(),
  linkedin: attr(),
  presentationTopics: hasMany(),
  avatar: attr('image'),
  age: attr()
});
