// 下面代码输出什么

var a = 10;

(function () {
  console.log(a);
  a = 5;
  console.log(window.a);
  var a = 20;
  console.log(a);
})();

console.log(a);

// undefined
// 10 // // undefined
// 20
// 10
