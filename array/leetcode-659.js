/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let stack = [nums[0]];
  let flag = true;
  let i = 1;

  //   for (let i = 1, len = nums.length; i < len; i++) {
  while (i < nums.length) {
    // 2. 3 3 4
    // 2. 3 3 4 4
    // 2. 3 4
    // 2. 3 5

    // 2. 3 4
    if (
      nums[i] !== stack[stack.length - 1] &&
      nums[i] !== stack[stack.length - 1] + 1
    ) {
      if (stack.length >= 3) {
        stack = [];
        i++;
        continue;
      } else {
        flag = false;
        break;
      }
    }

    // 2. 3 5
    if (
      nums[i] !== stack[stack.length - 1] &&
      nums[i] !== stack[stack.length - 1] + 1
    ) {
      if (stack.length >= 3) {
        stack = [];
        i++;
        continue;
      } else {
        flag = false;
        break;
      }
    }

    if (nums[i] === stack[stack.length - 1]) {
      i++;
    }

    //  清空栈的条件：不连续；奇数 偶数 奇数
    else if (nums[i] === stack[stack.length - 1] + 1) {
      i++;
    }
  }
};

let nums = [1, 2, 3, 3, 4, 5];

let nums = [1, 2, 3, 3, 4, 4, 5, 5];

let nums = [1, 2, 3, 3, 4, 4, 5]; // 1 2  3 4 ; 3 4 5

let nums = [1, 2, 3, 4, 4, 5, 5, 6];

let nums = [1, 2, 3, 4, 4, 5];

console.log(isPossible(nums));
