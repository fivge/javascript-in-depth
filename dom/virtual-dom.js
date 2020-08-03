class Element {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs || {};
    this.children = children || [];
  }
  render() {
    //这个函数是用来生成真实DOM的，最后会把return的结果添加到页面中去
  }
}

/**
<ul id="list">
  <li class="a">txt_a</li>
  <li class="a">txt_b</li>
</ul>
**/
//根据上面结构可以用一下方式创建一棵 Virtual Dom Tree
let ul = new Element("ul", { id: "list" }, [
  new Element("li", { class: "a" }, ["txt_a"]),
  new Element("li", { class: "b" }, ["txt_b"]),
]); //ul 就是一棵个Virtual Dom Tree

let ulDom = ul.render(); //生成真实Dom

// document.body.appendChild(ulDom); //添加到页面中
