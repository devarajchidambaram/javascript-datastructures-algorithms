var threeSum = require('../threeSum');

test('threeSum', function () {
  expect(threeSum([-2, -1, -1, 1, 1, 2, 2])).toEqual([[-2, 1, 1], [-1, -1, 2]]);
});
