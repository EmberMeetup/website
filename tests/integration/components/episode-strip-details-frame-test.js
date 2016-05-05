import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('episode-strip-details-frame', 'Integration | Component | episode strip details frame', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{episode-strip-details-frame}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#episode-strip-details-frame}}
      template block text
    {{/episode-strip-details-frame}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
