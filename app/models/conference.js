import PostModel from 'ember-wordpress/models/post';
import EventMixin from './event-mixin';

import DS from 'ember-data';

const {
  attr
} = DS;

export default PostModel.extend(EventMixin, {
  eventbrite: attr(),
  hero: attr(),
  template: attr()
});
