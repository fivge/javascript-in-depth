let flatten_1 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
      //   result.push(...flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

// 乱序
let flatten_2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let t = arr[i];
      arr.splice(i, 1);
      arr = arr.concat(t);
      i--;
    }
  }

  return arr;
};

// 非乱序
let flatten_3 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let item = arr[i];
      let end = arr.splice(i + 1);

      arr.splice(i, 1);

      arr = arr.concat(item).concat(end);
      i--;
    }
  }
  return arr;
};

// 替换字符串
let flatten = (arr) => {
  let str = arr.toString();
  //   str = ("" + str).replace(/,/g, "");
  str = JSON.parse(`[${str}]`);

  //   arr = Array.from(str);
  //   arr = [...str];

  console.log("debug", str);

  return str;
};

let arr = [1, [2, 3], [4, 5, [6, [7]]], 8, "11", "a"];

console.log(JSON.stringify(flatten(arr)));
