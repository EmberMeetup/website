import Ember from 'ember';

const Component = Ember.Component.extend({
});

Component.reopenClass({
    positionalParams: ['time', 'description']
});

export default Component;
