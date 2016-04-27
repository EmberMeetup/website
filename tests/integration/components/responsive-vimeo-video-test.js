import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsive-vimeo-video', 'Integration | Component | responsive vimeo video', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{responsive-vimeo-video}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#responsive-vimeo-video}}
      template block text
    {{/responsive-vimeo-video}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
