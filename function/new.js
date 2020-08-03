function People(name, age) {
  this.name = name;
  this.age = age;
  this.other = "whatever";
}

// 让实例可以访问到私有属性
// 让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性
// 如果构造函数返回的结果不是引用数据类型

function newOperator(ctor, ...args) {
  let obj = Object.create(ctor.prototype);
  let res = ctor.apply(obj, args);

  let isObject = typeof res === "object" && res !== null;
  let isFunction = typeof res === "function";
  return isObject || isFunction ? res : obj;
}

let foo = new People("foo", 12);

let foo = Object.create(People.prototype);
People.apply(foo, ["foo", 12]);

let foo = newOperator(People, "foo", 12);

console.log(foo, Object.getPrototypeOf(foo) === People.prototype);
