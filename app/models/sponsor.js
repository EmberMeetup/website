import DS from 'ember-data';
import Model from 'ember-data/model';
import PostMixin from './post-mixin';

const {
  attr
} = DS;

export default Model.extend(PostMixin, {
  companyName: attr(),
  featured: attr(),
  link: attr()
});
