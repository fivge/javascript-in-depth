// 递归
let flat = (array) => {
  let flatArray = [];
  for (let i = 0, len = array.length; i < len; i++) {
    if (Array.isArray(array[i])) {
      flatArray.push(...flat(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }

  return flatArray;
};

let ary = [1, [2, [3, [4, 5]]], 6]; // -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(flat(ary));

console.log(str);

// res6 展开操作
//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

console.log(ary);
