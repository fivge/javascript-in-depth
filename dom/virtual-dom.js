class Element {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs || {};
    this.children = children || [];
  }
  render() {
    let element = null;
    element = document.createElement(this.tagName);

    // attrs
    for (let attr in this.attrs) {
      // element[attr] = this.attrs[attr];
      element.setAttribute(attr, this.attrs[attr]);
    }

    // children
    this.children = this.children.map((item) =>
      item instanceof Element ? item.render() : item
    );

    element.append(...this.children);

    return element;
  }
}

// <ul id="list">
//   <li class="a">txt_a</li>
//   <li class="a">txt_b</li>
// </ul>
let ul = new Element("ul", { id: "list" }, [
  new Element("li", { class: "a" }, ["txt_a"]),
  new Element("li", { class: "b" }, ["txt_b"]),
]);

let ulDom = ul.render();

console.log(ulDom.outerHTML);
