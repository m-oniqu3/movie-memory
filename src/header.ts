import Logo from "./assets/logo.png";

export class BaseNav {
  constructor() {}

  generateNavbar() {
    const nav = document.querySelector(".nav") as HTMLElement;

    nav.classList.add("header");
    nav.innerHTML = `
      <figure class="header__logo">
        <img src=${Logo} alt="logo" />
        </figure>
        `;

    return nav;
  }
}
