import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';
import EventMixin from './event-mixin';

export default PostModel.extend(EventMixin, {
  template: DS.attr()
});
