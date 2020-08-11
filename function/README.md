> Function

xx

> bind apply bind

> new

- 创建了一个全新的对象。
- 这个对象会被执行[[Prototype]]（也就是**proto**）链接。
- 生成的新对象会绑定到函数调用的 this。
- 通过 new 创建的每个对象将最终被[[Prototype]]链接到这个函数的 prototype 对象上。
- 如果函数没有返回对象类型 Object(包含 Functoin, Array, Date, RegExg, Error)，那么 new 表达式中的函数调用会自动返回这个新的对象。

[面试官问：能否模拟实现 JS 的 new 操作符](https://juejin.im/post/5bde7c926fb9a049f66b8b52)

Object.create()

> this

> `=>`

> 闭包

> 作用域

##### 变量声明提升 hoisting

> var

```js
console.log(a);
var a = 5;
console.log(a);

// undefined
// 5
```

`=>`

```js
var a;
console.log(a);
a = 5;
console.log(a);
```

> > 由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用，这个行为叫做“hoisting”。“hoisting”就像是把所有的变量声明移动到函数或者全局代码的开头位置。

> let

与通过 var 声明的有初始化值 undefined 的变量不同，通过 let 声明的变量直到它们的定义被执行时才初始化。在变量初始化前访问该变量会导致 ReferenceError。该变量处在一个自块顶部到初始化处理的“暂存死区”中。

```js
console.log(a);
let a = 2;

// Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
```

> 构造函数 IoC DI
