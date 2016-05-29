import Store from 'ember-data/store';

export default Store.extend({
  queryRecordBySlug(type, slug) {
    return this.query(type, {
      filter: { name: slug }
    }).then(function(model){
      // TODO: replace this when is fixed https://github.com/emberjs/data/pull/4300#issuecomment-214479678
      return model.get('firstObject');
    });
  }
});