class PopUpInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super方法
    // 类的构造函数constructor总是先调用super()来建立正确的原型链继承关系
    super();

    // 我们首先会将shadow root附加到custom element上，然后通过一系列DOM操作创建custom element的内部阴影DOM结构，再将其附加到 shadow root上，最后再将一些CSS附加到 shadow root的style节点上。
    // 创建一个 shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // 创建一个 spans
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);
    var info = document.createElement("span");
    info.setAttribute("class", "info");

    // 获取text属性上的内容，并添加到一个span标签内
    var text = this.getAttribute("data-text");
    info.textContent = text;

    // 插入 icon
    var imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }
    var img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // 创建一些 CSS，并应用到 shadow dom上
    var style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // 将创建的元素附加到 shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// 最后，我们使用之前提到的define()方法将 custom element注册到CustomElementRegistry上，在方法的参数里，我们指定了元素的名称，以及定义了元素功能的类。
customElements.define("popup-info", PopUpInfo);
