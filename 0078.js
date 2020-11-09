/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];

  const dfs = (index, path) => {
    ans.push(path.slice());

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);
  console.log(ans);
  return ans;
};

subsets([1, 2, 3]);
