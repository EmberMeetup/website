import Ember from 'ember';
import HeadDataService from 'ember-cli-head/services/head-data';

const {
  merge
} = Ember;

export default HeadDataService.extend({

  change(props) {
    this.setProperties(merge({
      title: null,
      image: null,
      classNames: null,
      heroTitle: null,
      heroSubTitle: null
    }, props));
  }
  
});
