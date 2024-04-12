var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("Wardrobe", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Wardrobe extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            var _a;
            // Create a shadow root
            const shadow = this.attachShadow({ mode: "open" });
            // Create spans
            const wrapper = document.createElement("span");
            wrapper.setAttribute("class", "wrapper");
            const icon = document.createElement("span");
            icon.setAttribute("class", "icon");
            icon.setAttribute("tabindex", '0');
            const info = document.createElement("span");
            info.setAttribute("class", "info");
            // Take attribute content and put it inside the info span
            const text = this.getAttribute("data-text");
            info.textContent = text;
            // Insert icon
            let imgUrl = (_a = this.getAttribute("img")) !== null && _a !== void 0 ? _a : "img/default.png";
            const img = document.createElement("img");
            img.src = imgUrl;
            icon.appendChild(img);
            // Create some CSS to apply to the shadow dom
            const style = document.createElement("style");
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
            // Attach the created elements to the shadow dom
            shadow.appendChild(style);
            console.log(style.isConnected);
            shadow.appendChild(wrapper);
            wrapper.appendChild(icon);
            wrapper.appendChild(info);
        }
    }
    Wardrobe.is = 'hh-wardrobe';
    exports.default = Wardrobe;
});
define("index", ["require", "exports", "Wardrobe"], function (require, exports, Wardrobe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Wardrobe_1 = __importDefault(Wardrobe_1);
    customElements.define(Wardrobe_1.default.is, Wardrobe_1.default);
});
