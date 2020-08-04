// 冒泡
let bSort = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }

  return arr;
};
// 快速排序
// 递归 创建新数组
let qSort1 = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let target = arr[0];
  let left = [],
    right = [];

  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  left = qSort1(left);
  right = qSort1(right);
  arr = [...left, target, ...right];

  return arr;
};
// 递归 不创建新数组
let qSort2 = (arr) => {
  let target = arr[0];
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    if (arr[l] > target) {
      //   TODO
    }
  }

  return arr;
};

const arr = [3, 7, 2, 1, 8, 8, 8, 6, 5];

console.log(JSON.stringify(qSort2(arr)));
