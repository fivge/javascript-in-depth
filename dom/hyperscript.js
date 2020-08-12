function h() {
  var args = [].slice.call(arguments),
    e = null;

  function item(l) {
    var r;
    function parseClass(string) {
      var m = string.split(/([\.#]?[a-zA-Z0-9_-]+)/);
      m.forEach(function (v) {
        var s = v.substring(1, v.length);
        if (!v) return;
        if (!e) e = document.createElement(v);
        else if (v[0] === ".") e.classList.add(s);
        else if (v[0] === "#") e.setAttribute("id", s);
      });
    }

    if (l == null);
    else if ("string" === typeof l) {
      if (!e) parseClass(l);
      else e.appendChild((r = document.createTextNode(l)));
    } else if (
      "number" === typeof l ||
      "boolean" === typeof l ||
      l instanceof Date ||
      l instanceof RegExp
    ) {
      e.appendChild((r = document.createTextNode(l.toString())));
    }
    //there might be a better way to handle this...
    else if (Array.isArray(l)) l.forEach(item);
    else if (l instanceof Node) e.appendChild((r = l));
    else if (l instanceof Text) e.appendChild((r = l));
    else if ("object" === typeof l) {
      for (var k in l) {
        if ("function" === typeof l[k]) {
          if (/^on\w+/.test(k)) {
            e.addEventListener(k, l[k]);
          } else {
            e[k] = l[k]();
            l[k](function (v) {
              e[k] = v;
            });
          }
        } else if (k === "style") {
          for (var s in l[k])
            (function (s, v) {
              if ("function" === typeof v) {
                e.style.setProperty(s, v());
                v(function (val) {
                  e.style.setProperty(s, val);
                });
              } else e.style.setProperty(s, l[k][s]);
            })(s, l[k][s]);
        } else e[k] = l[k];
      }
    } else if ("function" === typeof l) {
      //assume it's an observable!
      var v = l();
      e.appendChild((r = v instanceof Node ? v : document.createTextNode(v)));

      l(function (v) {
        if (v instanceof Node && r.parentElement)
          r.parentElement.replaceChild(v, r), (r = v);
        else r.textContent = v;
      });
    }

    return r;
  }

  while (args.length) item(args.shift());

  return e;
}

// <h1>hello!</h1>
console.log(h("h1", "hello!").outerHTML);

// <a href="https://npm.im/hyperscript">hyperscript</a>
console.log(
  h("a", { href: "https://npm.im/hyperscript" }, "hyperscript").outerHTML
);

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

console.log(
  h(
    "table",
    h("tr", h("th", "letter"), h("th", "fruit")),
    Object.keys(obj).map(function (k) {
      return h("tr", h("th", k), h("td", obj[k]));
    })
  ).outerHTML
);
