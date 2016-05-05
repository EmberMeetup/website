import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('episode-strip-title-frame', 'Integration | Component | episode strip title frame', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{episode-strip-title-frame}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#episode-strip-title-frame}}
      template block text
    {{/episode-strip-title-frame}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
