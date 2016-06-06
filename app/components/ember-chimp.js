import Ember from 'ember';
import EmberChimp from 'ember-chimp/components/ember-chimp';
import layout from '../templates/components/ember-chimp';

const {
  get,
  Logger
} = Ember;

export default EmberChimp.extend({
  layout,
    
  submit(e) {
    e.preventDefault();
    
    this.send('submit');
  },
  
  actions: {
    submit() {
      let formAction = get(this, 'formAction');
      if (!formAction) { Logger.error('Ember Chimp: Can not submit without a formAction.'); }
      formAction = formAction.replace('/post?', '/post-json?').concat('&c=?');

      if (get(this, 'isLoading')) { return; }

      if (get(this, 'value').length === 0) { 
        this._triggerInvalid();
        return;
      }

      this.setProperties({
        chimpState: 'loading',
        chimpSays: get(this, 'loadingText')
      });
      
      let request = this.makeRequest(formAction)
        .then(response => this.handleResponse(response))
        .catch(() => this._triggerInvalid());

      if (this.get('didSubmitAction')) { this.sendAction('didSubmitAction', request); }
    }
  }
  
});
