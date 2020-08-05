// 求出任意非负整数区间中1出现的次数（从1到n中1出现的次数）

let getNumberCount1 = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    let value = i;

    while (1) {
      if (value % 10 === 1) {
        count++;
      }

      if (value >= 10) {
        value = (value - (value % 10)) / 10;
      } else {
        break;
      }
    }
  }

  return count;
};

let getNumberCount = (num) => {
  let count = 0;
  let value = num;

  // 324 32+1 3+1 1
  // 21               ~12

  while (1) {
    let isOne = false;
    isOne = value % 10 > 0;

    if (value >= 10) {
      value = (value - (value % 10)) / 10;
      count = count + value + (isOne ? 1 : 0);
    } else {
      count = count + (isOne ? 1 : 0);
      break;
    }

    //
  }

  return count;
};

// let num = 11;
// let num = 21;
let num = 324;
// let num = 320;

console.log(getNumberCount(num));
