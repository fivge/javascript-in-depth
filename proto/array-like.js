// 输出以下代码执行的结果并解释为什么

var obj = {
  "2": 3,
  "3": 4,
  length: 56,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
};
obj.push(1);
obj.push(1);
console.log(obj);

// DevTools // Object(58) [empty × 2, 3, 4, empty × 52, 1, 1, splice: ƒ, push: ƒ]
// node // {'2': 3,'3': 4,'56': 1,'57': 1,length: 58,splice: [Function: splice],push: [Function: push]}

// 类数组
// DevTools 数组猜测
