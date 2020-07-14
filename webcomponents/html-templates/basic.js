// template
let template = document.getElementById("my-paragraph-01");
let templateContent = template.content;
document.body.appendChild(templateContent);

// template with ShadowDOM custom-elements
customElements.define(
  "my-paragraph-02",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph-02");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

// slot
customElements.define(
  "my-paragraph-03",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph-03");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
