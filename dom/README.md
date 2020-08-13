#### hyperscript

https://github.com/twilson63/html2hscript

#### virtual-dom

https://github.com/Matt-Esch/virtual-dom

https://zhuanlan.zhihu.com/p/57974487

#### preact

https://juejin.im/post/5ad31130f265da239c7bcd4f

https://github.com/preactjs/preact/blob/master/src/render.js

https://github.com/preactjs/preact/blob/master/src/diff/index.js

---

> hyperscript

```js
<h1>hello!</h1>;

h("h1", "hello!").outerHTML;
```

https://github.com/hyperhype/hyperscript

---

### Web API

```js
// 创建一个由标签名称 tagName 指定的 HTML 元素。如果用户代理无法识别 tagName，则会生成一个未知 HTML 元素
document.createElement();

// 返回一个匹配特定 ID的元素
document.getElementById();

//  ParentNode.append 方法在 ParentNode的最后一个子节点之后插入一组 Node 对象或 DOMString 对象。被插入的 DOMString 对象等价为 Text 节点。
ParentNode.append();
```

```js
// 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。
Element.setAttribute();
// 获取某个属性当前的值
Element.getAttribute();
// 删除某个属性
Element.removeAttribute();
```
