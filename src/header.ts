import Logo from "./assets/logo.png";

export class BaseHeader {
  constructor() {}

  generateHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
      <figure class="header__logo">
        <img src=${Logo} alt="logo" />
        </figure>
        `;

    return header;
  }
}
