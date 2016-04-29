import DS from 'ember-data';
import Model from 'ember-data/model';
import EventMixin from './event-mixin';
import PostMixin from './post-mixin';

const {
  attr
} = DS;

export default Model.extend(EventMixin, PostMixin, {
  number: attr(),
  season: attr()
});
