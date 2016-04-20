import Ember from 'ember';

const Component = Ember.Component.extend({
  classNames: ["gem-cards--card"]
});

Component.reopenClass({
    positionalParams: ['title']
});

export default Component;
