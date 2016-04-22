import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

const {
  attr
} = DS;

export default PostModel.extend({
  companyName: attr(),
  logo: attr('image'),
  link: attr()
});
