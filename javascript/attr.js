/* 实现一个$attr(name,value)遍历
 * 属性为name
 * 值为value的元素集合
 * 例如下面示例:
 */
// let ary = $attr("class", "box"); //=>获取页面中所有class为box的元素
// =====================================

function $attr(property, value) {
  let elements = document.getElementsByTagName("*"),
    arr = [];
  console.log("debug", elements);
  elements = Array.from(elements);
  elements.forEach((item) => {
    let itemValue = item.getAttribute(property);
    if (property === "class") {
      new RegExp("\\b" + value + "\\b").test(itemValue) ? arr.push(item) : null;
      return;
    }
    if (itemValue === value) {
      arr.push(item);
    }
  });
  return arr;
}

console.log($attr("class", "box"));
