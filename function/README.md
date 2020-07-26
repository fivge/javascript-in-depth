> bind apply

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
