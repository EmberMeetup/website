import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gem-episode-call-to-action', 'Integration | Component | gem episode call to action', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gem-episode-call-to-action}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gem-episode-call-to-action}}
      template block text
    {{/gem-episode-call-to-action}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
