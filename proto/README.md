### 原型与原型链

> ~~`__proto__`~~

> `Object.getPrototypeOf()`

Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

- 给定对象的原型。如果没有继承属性，则返回 null 。
- 在 ES5 中，如果参数不是一个对象类型，将抛出一个 TypeError 异常。在 ES2015 中，参数会被强制转换为一个 Object。

> `.prototype`

```js
Object.getPrototypeOf(new String("111")) === String.prototype;

Object.getPrototypeOf(String.prototype) === Object.prototype; // true
```

```js
let triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

let obj = new ColoredTriangle();

// hasOwnProperty() 继承的属性不显示
for (let prop in obj) {
  console.log(prop); // color a b c

  if (obj.hasOwnProperty(prop)) {
    console.log(prop); // color
  }
}
```

> 原型与原型链

- 所有原型链的终点都是 `Object` 函数的 `prototype` 属性
- 每一个构造函数都拥有一个 `prototype` 属性，此属性指向一个对象，也就是原型对象
- 原型对象默认拥有一个 `constructor` 属性，指向指向它的那个构造函数
- 每个对象都拥有一个隐藏的属性 `__proto__` ，指向它的原型对象(为了更好的支持，建议只使用 Object.getPrototypeOf())

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200726172745.jpg)

```js
const Person = function () {};

const p = new Person();

// p -> Person -> Object -> null

console.log(Object.getPrototypeOf(p) === Person.prototype); // true

console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(p)) === Object.prototype
); // true

console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(p))) ===
    null
); // true
```

> 原型对象和构造函数有何关系？

在 JavaScript 中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个 prototype 属性，这个属性指向函数的原型对象。
当函数经过 new 调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个**proto**属性，指向构造函数的原型对象。

> 能不能描述一下原型链？

JavaScript 对象通过`_proto_` 指向父类对象，直到指向 Object 对象为止，这样就形成了一个原型指向的链条, 即原型链。

对象的 hasOwnProperty() 来检查对象自身中是否含有该属性
使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 true

### typeof instanceof

> 原始类型

- boolean
- string
- number
- null
- undefined
- symbol
- object

> typeof instanceof 能否判断类型、区别

- 对于原始类型来说，除了 null 都可以调用 typeof 显示正确的类型。
- 但对于引用数据类型，除了函数之外，都会显示"object"。
- instanceof 的原理是基于原型链的查询，只要处于原型链中，判断永远为 true

> instanceof 能否判断基本数据类型

`Symbol.hasInstance`

- Symbol.hasInstance 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 instanceof 操作符在某个类上的行为。
- 借助 Symbol.hasInstance 重写 instanceof 行为

```js
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === "number";
  }
}
console.log(111 instanceof PrimitiveNumber); // true

class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

### 原型链与继承

```js
function Parent5() {
  this.name = "parent5";
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = "child5";
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
```
