### defer async

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200804100704.png)

```
<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="myscript.js"></script>

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

<script type="module" src="myscript.js"></script>

ES6 Module，默认以defer加载。可添加 async 以 async 模式加载
```

```html
<script async src="./defer-async.js"></script>
<script defer src="./defer-async.js"></script>
<script src="./defer-async.js"></script>
<script>
  console.log("load dom", t.getSeconds(), t.getMilliseconds());
</script>
```

```js
let s = new Date();
console.log("load script", s.getSeconds(), s.getMilliseconds());
```

> script

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200804101111.png)

> script async

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200804103117.png)

> script defer

![](https://raw.githubusercontent.com/fivge/hexo-pic/master/2020/20200804103222.png)
