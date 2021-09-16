"use strict";

class Content extends HTMLElement {
  constructor() { super(); }
  
  connectedCallback() {
    this.innerHTML = `<div id="navbar">
      <nav class="lg:block hidden">
      </nav>

      <nav class="lg:hidden block">
      </nav>
    </div>
      
    <div id="page" class="mx-auto container">${this.innerHTML}</div>
      
    <div id="footer">
    
    </div>`
  }
}

class Head extends HTMLElement {
  static og_description =  "Welcome to the averagelolol's land! This website is for some cool " + 
  "projects of mine as well as other random stuff."
  
  constructor() { super(); }
  
  connectedCallback() {
    this.innerHTML = `
      <meta charset="UTF-8" />
      <title>${this.title}</title>

      <meta name="og:site_name" content="The averagelolol's land" />
      <meta name="og:title" content="${this.title}" />
      <meta name="og:description" content="${Head.og_description}" />

      <link href="averagelolol/static/funstyle.css" rel="stylesheet" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" 
      rel="stylesheet" crossorigin="anonymous" />
    `
  }
}

customElements.define('content-component', Content);
customElements.define('head-component', Head)