// 手动实现深拷贝
// 原型链递归

let deepClone = (object) => {
  // 基本数据类型
  if (typeof object !== "object" || object === null) {
    return object;
  } else {
    // 对象
    let cloneObject = Array.isArray(object) ? [] : {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        cloneObject[key] = deepClone(object[key]);
      }
    }
    return cloneObject;
  }
};

let obj = {
  a: {
    b: 1,
  },
  c: "2",
  d: [1, 2, 3],
};

let obj2 = {};

obj2 = deepClone(obj);

obj.a.b = 6;

console.log(obj, obj2);
