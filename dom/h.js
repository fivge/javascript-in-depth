let h = (...args) => {
  /** HTML 标签 */
  let element = null;

  let item = (arg) => {
    if (arg === null) {
    } else if (typeof arg === "string") {
      // 第一个 string 是标签
      // 第二个 string 是 innerText
      if (element) {
        element.innerText = arg;
      } else {
        element = document.createElement(arg);
      }
    } else if (typeof arg === "number" || typeof arg === "boolean") {
      element.innerText = arg.toString();
    } else if (arg instanceof Node) {
      element.appendChild(arg);
    } else if (typeof arg === "object") {
      for (let item in arg) {
        if (typeof arg[item] === "string") {
          element[item] = arg[item]; // 严格模式
          // element.setAttribute(item, arg[item]); // 非严格模式
        } else {
          // TODO
        }
      }
    } else if (1) {
      // TODO
    }
  };

  args.forEach((arg) => item(arg));

  return element;
};

// <h1>hello!</h1>
console.log(h("h1", "hello!").outerHTML);

// <a href="https://npm.im/hyperscript">hyperscript</a>
console.log(
  // h("a", { href: "https://npm.im/hyperscript" }, "hyperscript").outerHTML
  h("a", { foo: "bar" }, "hyperscript").outerHTML
);

// <table>
// <tr>
//     <th>letter</th>
//     <th>fruit</th>
// </tr>
// </table>
console.log(h("table", h("tr", h("th", "letter"), h("th", "fruit"))).outerHTML);

// <table>
// <tr>
//     <th>letter</th>
//     <th>fruit</th>
// </tr>
// <tr>
//     <th>a</th>
//     <td>Apple</td>
// </tr>
// <tr>
//     <th>b</th>
//     <td>Banana</td>
// </tr>
// <tr>
//     <th>c</th>
//     <td>Cherry</td>
// </tr>
// <tr>
//     <th>d</th>
//     <td>Durian</td>
// </tr>
// <tr>
//     <th>e</th>
//     <td>Elder Berry</td>
// </tr>
// </table>

var obj = {
  a: "Apple",
  b: "Banana",
  c: "Cherry",
  d: "Durian",
  e: "Elder Berry",
};

// console.log(
//   h(
//     "table",
//     h("tr", h("th", "letter"), h("th", "fruit")),
//     Object.keys(obj).map(function (k) {
//       return h("tr", h("th", k), h("td", obj[k]));
//     })
//   ).outerHTML
// );
