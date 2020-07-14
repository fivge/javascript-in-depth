## webcomponents

### 概念

- **Custom elements（自定义元素）：** 一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。
- **Shadow DOM（影子 DOM）**：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML templates（HTML 模板）：** `<template>`和`<slot>`元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

#### 使用

1. 创建一个类或函数来指定 web 组件的功能，如果使用类，请使用 ECMAScript 2015 的类语法(参阅[类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)获取更多信息)。
2. 使用 [`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。
3. 如果需要的话，使用[`Element.attachShadow()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow) 方法将一个 shadow DOM 附加到自定义元素上。使用通常的 DOM 方法向 shadow DOM 中添加子元素、事件监听器等等。
4. 如果需要的话，使用 [` 和[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到您的 shadow DOM 中。
5. 在页面任何您喜欢的位置使用自定义元素，就像使用常规 HTML 元素那样。

### custom elements

`CustomElementRegistry`接口的实例用来处理 web 文档中的 custom elements — 该对象允许你注册一个 custom element，返回已注册 custom elements 的信息，等等。

`CustomElementRegistry.define()`方法用来注册一个 custom element，该方法接受以下参数：

- 表示所创建的元素名称的符合`DOMString`标准的字符串。注意，custom element 的名称不能是单个单词，且其中必须要有短横线
- 用于定义元素行为的类 `Class`
- `可选参数`，一个包含 `extends` 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。

共有两种 custom elements：

- `Autonomous custom elements`是独立的元素，它不继承其他内建的 HTML 元素
- `Customized built-in elements`继承自基本的 HTML 元素

```js
// Autonomous custom elements
customElements.define("popup-info", PopUpInfo);
class PopUpInfo extends HTMLElement {}

// Customized built-in elements
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
class ExpandingList extends HTMLUListElement {}
```

```html
<popup-info img="alt.png" data-text="Your card validation code"></popup-info>

<ul is="expanding-list"></ul>
```

在构造函数中，可以设定一些`生命周期`的回调函数，在特定的时间，这些回调函数将会被调用

在 custom element 的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：

- `connectedCallback`：当 custom element 首次被插入文档 DOM 时，被调用。
- `disconnectedCallback`：当 custom element 从文档 DOM 中删除时，被调用。
- `adoptedCallback`：当 custom element 被移动到新的文档时，被调用。
- `attributeChangedCallback`: 当 custom element 增加、删除、修改自身属性时，被调用。

### shadow DOM

特有术语

- Shadow host：一个常规 DOM 节点，Shadow DOM 会被附加到这个节点上。
- Shadow tree：Shadow DOM 内部的 DOM 树。
- Shadow boundary：Shadow DOM 结束的地方，也是常规 DOM 开始的地方。
- Shadow root: Shadow tree 的根节点。

![](https://mdn.mozillademos.org/files/15788/shadow-dom.png)

可以使用 `Element.attachShadow()` 方法来将一个 shadow root 附加到任何一个元素上。它接受一个配置对象作为参数，该对象有一个 mode 属性，值可以是 open 或者 closed：

open 表示可以通过页面内的 JavaScript 方法来获取 Shadow DOM

如果你将一个 Shadow root 附加到一个 Custom element 上，并且将 mode 设置为 closed，那么就不可以从外部获取 Shadow DOM 了

```js
let shadow = elementRef.attachShadow({ mode: "open" });
let shadow = elementRef.attachShadow({ mode: "closed" });
```

如果你想将一个 Shadow DOM 附加到 custom element 上，可以在 custom element 的构造函数中添加如下实现（目前，这是 shadow DOM 最实用的用法）：

```js
let shadow = this.attachShadow({ mode: "open" });
```

**Shadow DOM 内部的元素始终不会影响到它外部的元素（除了 :focus-within）**

#### 使用外部引入的样式

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200709180351.png)

因为<link> 元素不会打断 shadow root 的绘制, 因此在加载样式表时可能会出现未添加样式内容（FOUC），导致闪烁。

许多现代浏览器都对从公共节点克隆的或具有相同文本的<style> 标签实现了优化，以允许它们共享单个支持样式表，通过这种优化，外部和内部样式的性能表现比较接近。

### HTML templates

`<template>` `<slot>`

<template> 元素及其内容不会在 DOM 中呈现，但仍可使用 JavaScript 去引用它

<slot> 能在单个实例中通过声明式的语法展示不同的文本

### docs

- [Web Components the Right Way](https://github.com/mateusortiz/webcomponents-the-right-way)
- <https://www.webcomponents.org/>
- <https://developer.mozilla.org/zh-CN/docs/Web/Web_Components>
