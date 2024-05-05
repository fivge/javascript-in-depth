function instanceOf(left, right) {
  // 请完善以下代码，不能使用原生instanceof
  if (typeof left !== "object" || left === null) {
    return false;
  }

  let proto = Object.getPrototypeOf(left);

  while (1) {
    if (proto === null) {
      return false;
    } else if (proto === right.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
}

class A {}
class B extends A {}
class C {}
const b = new B();
console.log(instanceOf(b, B));
console.log(instanceOf(b, A));
console.log(instanceOf(b, C));
