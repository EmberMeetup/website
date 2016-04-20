import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gem-sponsor-links', 'Integration | Component | gem sponsor links', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gem-sponsor-links}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gem-sponsor-links}}
      template block text
    {{/gem-sponsor-links}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
