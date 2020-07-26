// 手动实现 instanceof
// 原型链的向上查找

let myInstanceof = (object, type) => {
  // 基本数据类型
  if (typeof object !== "object" || object === null) {
    return false;
  }
  // 返回指定对象的原型,如果没有继承属性，则返回 null;
  //  如果参数不是一个对象类型，参数会被强制转换为一个 Object: 故先用 typeof 判断是否为基本数据类型
  let proto = Object.getPrototypeOf(object);
  while (true) {
    // 查找到尽头，还没找到
    if (proto === null) {
      return false;
    }
    // 找到相同的原型对象，返回成功；否则继续往上查找
    else if (proto === type.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
};

console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String)); //true
console.log(myInstanceof(new String("111"), Object)); //true
