import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  type: 'tag',
  name: attr(),
  slug: attr(),
  description: attr()
});