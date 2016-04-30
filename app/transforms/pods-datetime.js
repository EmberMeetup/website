import Transform from 'ember-data/transform';
import moment from 'moment';

export default Transform.extend({
  deserialize(serialized) {
    if ( typeof serialized === 'string' ) {
      return moment.tz(serialized, "America/New_York").toDate();      
    }
    return serialized;
  },

  serialize(deserialized) {
    return deserialized.toString();
  }
});
