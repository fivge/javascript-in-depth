// 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

// 数组长度不超过1000。
// 数组里整数的范围为 [0, 1000]。

// // 暴力循环
var triangleNumber = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i]
        ) {
          sum++;
        }
      }
    }
  }

  return sum;
};

let nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));

// 排序双指针
var triangleNumber = function (nums) {
  // 排序
  function sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let t = arr[0],
      left = [],
      right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= t) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }

    return [...sort(left), t, ...sort(right)];
  }

  nums = sort(nums);

  let sum = 0;

  // 只需判断 a + b > c
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let k = nums.length;
      for (; k > j; k--) {
        if (nums[i] + nums[j] > nums[k]) {
          break;
        }
      }
      sum = sum + k - j;
    }
  }

  return sum;
};

let nums = [2, 4, 3, 2];
let nums = [1, 2, 2, 4, 5, 7, 8, 12, 13, 14];

console.log(triangleNumber(nums));
