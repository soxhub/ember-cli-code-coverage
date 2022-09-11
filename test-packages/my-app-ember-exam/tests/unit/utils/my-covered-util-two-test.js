import myUncoveredUtil21 from 'my-app-ember-exam/utils/my-covered-util-two';
import { module, test } from 'qunit';

module('Unit | Utility | my covered util');

// Replace this with your real tests.
test('it works', function (assert) {
  let result = myUncoveredUtil21();
  assert.ok(result);
});

Array(100).fill().forEach((_, i) => {
  test(`it works ${i}`, function (assert) {
    let result = myUncoveredUtil21();
    assert.ok(result);
  });
})
