// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
// 找出那个只出现了一次的元素

let getNumberOnce1 = (array) => {
  let num;

  for (let i = 0; i < array.length; i++) {
    let times = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        times++;
      }
    }

    if (times % 2 === 1) {
      num = arr[i];
      break;
    }
  }

  return num;
};

let getNumberOnce = (array) => {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num = num ^ array[i];
  }
  return num;
};
// [0,n]

// [0] 2

// min
// hashArry[i] === 1

// i-min
// [-3]

// let arr = [1, 0, 0, 10, 10];
// [-1, 0, 0, -10, -10];
let arr = [1, 2, 3, 2, 2, 2, 1];
// let arr = [1, 0, 0, 10, 10];
// console.log(31 ^ 0);
console.log(0 ^ 0);
// console.log(getNumberOnce(arr));

// input: [1, 0, 0, 10, 10]
// outpu: 1

console.log(4 ^ 6); // 2

// 0100 // 2^2
// 0110 // 2^2 + 2^1
// =>
// 0010 // 2
