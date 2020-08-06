// 实现字符串匹配算法 indexOf

// 暴力匹配
let indexOf1 = (str, target, start) => {
  let position = -1;

  if (!start) {
    start = 0;
  }

  if (target === "") {
    position = 0;
  }

  for (let i = start, len = str.length; i < len; i++) {
    if (target.length > len - i) {
      break;
    }

    if (position >= 0) {
      break;
    }

    for (let j = 0, len2 = target.length; j < len2; j++) {
      if (str[i + j] !== target[j]) {
        break;
      }
      if (j === len2 - 1) {
        position = i;
      }
    }
  }

  return position;
};

// KMP算法
let indexOf_KMP = (str, target, start) => {};

// Sunday算法
// 当原字符串（src）和待查找字符串（dest）不匹配时，只需判断原字符串中下一个字符（THIS单词后的空格）是否出现在待查找字符串（dest）中；若存在，按照从右到左最先出现的位置偏移；若不存在，整体偏移 dest 的长度。
// TODO
let indexOf_Sunday = (str, target) => {
  let i = 0,
    j = 0;

  while (i < str.length && j < target.length) {
    if (str[i] !== target[j]) {
      j = 0;

      let kFlag = -1;
      for (let k = target.length - 1; k >= 0; k--) {
        if (str[i + target.length] === target[k]) {
          kFlag = k;
          break;
        }
      }

      if (kFlag >= 0) {
        i = i + kFlag;
      } else {
        i = i + target.length;
      }
    } else {
      i++;
      j++;
    }
  }

  console.log("debug", i, j);
};

//
// ^
//
// test
// test
// test

// let str = "abcdefg",
//   target = "efg",
//   start = 0;

// let str = "abcdefg",
//   target = "",
//   start = 0;

let str = "this_is_just_for_test",
  target = "test",
  start = 0;

// console.log(indexOf1(str, target, start));
console.log(indexOf_Sunday(str, target));

// 0123456
// 34567

// console.log(str.indexOf(target, start));
