/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = i;
    } else {
      if (i - map[nums[i]] <= k) {
        console.log(true);
        return true;
      } else {
        map[nums[i]] = i;
      }
    }
  }
  console.log(false);
  return false;
};

containsNearbyDuplicate([1, 2, 3, 1], 3);
containsNearbyDuplicate([1, 0, 1, 1], 1);
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
