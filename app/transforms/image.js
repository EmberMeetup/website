import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize({guid}) {
    return guid;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
