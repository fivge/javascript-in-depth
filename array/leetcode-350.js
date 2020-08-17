// 给定两个数组，编写一个函数来计算它们的交集
// number 数组

// 暴力循环
function intersect(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
        arr2[j] = null;
        break;
      }
    }
  }

  return arr;
}

let arr1 = [5, 6, 5, 4, 2, 1];
let arr2 = [1, 2, 3, 5, 8, 7, 8, 1, 5];

console.log(intersect(arr1, arr2)); // [ 5, 5, 2, 1 ]

// 如果给定的数组已经排好序呢？你将如何优化你的算法？

排序双指针;
function intersect(arr1, arr2) {
  let arr = [];
  let flag1 = 0,
    flag2 = 0;

  while (flag1 < arr1.length && flag2 < arr2.length) {
    if (arr1[flag1] === arr2[flag2]) {
      arr.push(arr1[flag1]);
      flag1++;
      flag2++;
    } else if (arr1[flag1] > arr2[flag2]) {
      flag2++;
    } else if (arr1[flag1] < arr2[flag2]) {
      flag1++;
    }
  }

  return arr;
}

let arr1 = [1, 2, 4, 5, 5, 6];
let arr2 = [1, 1, 2, 3, 5, 5, 7, 8, 8];

console.log(intersect(arr1, arr2));

// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？

// 哈希计数
function intersect(arr1, arr2) {
  let arr = [];
  let hashArr1 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (hashArr1[arr1[i]]) {
      hashArr1[arr1[i]]++;
    } else {
      hashArr1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashArr1[arr2[i]] && hashArr1[arr2[i]] > 0) {
      arr.push(arr2[i]);
      hashArr1[arr2[i]]--;
    }
  }

  return arr;
}

let arr1 = [5, 6, 5];
let arr2 = [1, 2, 3, 5, 8, 7, 8, 1, 5];

console.log(intersect(arr1, arr2));

// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

// TODO
