// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 暴力解法
let getMaxValue_1 = (nums, k) => {
  let maxs = [];

  for (let i = 0, len = nums.length; i < len - k + 1; i++) {
    let max = nums[i];

    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }

    maxs.push(max);
  }

  return maxs;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

console.log(getMaxValue(nums, k));
