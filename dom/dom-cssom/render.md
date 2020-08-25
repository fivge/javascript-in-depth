> > 加载方式

css 异步加载（不阻塞）
js 同步加载（阻塞）

> > 网页的渲染机制

解析 HTML 标签, 构建 DOM 树
解析 CSS 标签, 构建 CSSOM 树
把 DOM 和 CSSOM 组合成 渲染树 (render tree)
在渲染树的基础上进行布局, 计算每个节点的几何结构
把每个节点绘制到屏幕上 (painting)
