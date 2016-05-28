import Ember from 'ember';

const {
  inject,
  isEmpty
} = Ember;

const VideoLoader = Ember.Component.extend({
  store: inject.service(),
  classNames: ['video-loader'],

  init() {
    this._super(...arguments);
    this.set('state', null);
  },
  
  didReceiveAttrs() {
    this._super(...arguments);
    
    let slug = this.get('slug');
    if (!isEmpty(slug)) {
      this.send('load', slug);
    }
  },
  
  actions: {
    
    load(slug) {
      this.setProperties({
        _slug: slug,
        state: new Loading()
      });
      
      this.get('store').queryRecordBySlug('presentation-topic', slug)
        .then( model => {
          this.set('state', new Loaded(model));
          this.sendAction('onload', slug, model);
        })
        .catch(() => {
          this.set('state', new Error('Could not load video'));
        });
    },
    
    clear() {
      this.set('state', null);
    }
    
  }
  
});

export default VideoLoader.reopenClass({
  positionalParams: ['slug']
});

class Loading {
  constructor () {
    this.isLoading = true;
  }
}

class Loaded {
  constructor (model) {
    this.model = model;
    this.isLoaded = true;
  }
}

class Error {
  constructor (message) {
    this.isLoaded = true;
    this.isError = true;
    this.message = message;
  }
}