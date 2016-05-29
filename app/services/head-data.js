import Ember from 'ember';
import HeadDataService from 'ember-cli-head/services/head-data';

const {
  merge
} = Ember;

export default HeadDataService.extend({
  fastboot: Ember.inject.service(),

  change(props) {
    this.setProperties(merge({
      title: null,
      description: null,
      image: null,
      classNames: null,
      heroImage: null,
      heroTitle: null,
      heroSubTitle: null,
      buttonUrl: null,
      buttonText: null,
      'twitter:card': 'summary',
      'twitter:player': null,
      'twitter:creator': null,
      'twitter:image': null
    }, props));
  }
  
});
