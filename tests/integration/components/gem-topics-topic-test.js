import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gem-topics-topic', 'Integration | Component | gem topics topic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gem-topics-topic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gem-topics-topic}}
      template block text
    {{/gem-topics-topic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
