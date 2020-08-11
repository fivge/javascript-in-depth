// 不借助变量，交换两个数。

function swap(a, b) {
  // 123 456
  // 579 456
  // 579 123
  // 456 123

  a = a + b;

  b = a - b;
  a = a - b;

  console.log(a, b);
}

// a = 123
// b = 456

a = -12;
b = 15;

swap(a, b);

console.log(a, b);

console.log(0.1 + 0.2);
