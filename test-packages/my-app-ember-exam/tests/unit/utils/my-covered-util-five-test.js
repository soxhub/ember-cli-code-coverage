import myCoveredUtil from 'my-app-ember-exam/utils/my-covered-util';
import { module, test } from 'qunit';

module('Unit | Utility | my covered util');

// Replace this with your real tests.
test('it works', function (assert) {
  let result = myCoveredUtil();
  assert.ok(result);
});

Array(100).fill().forEach((_, i) => {
  test(`it works ${i}`, function (assert) {
    let result = myCoveredUtil();
    assert.ok(result);
  });
})