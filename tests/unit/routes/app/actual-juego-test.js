import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | crear-juego', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:/app/actual-juego');
    assert.ok(route);
  });
});
