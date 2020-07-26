// 0x01

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

// 0x02

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
