import Logo from "../assets/logo.png";

export class BaseNav {
  nav: HTMLElement;
  navContainer: HTMLElement;

  constructor() {
    this.nav = document.querySelector(".nav") as HTMLElement;
    this.navContainer = document.querySelector(".nav .container") as HTMLElement;

    this.nav.classList.add("nav");
    this.navContainer.classList.add("nav__container");
  }

  generateNavbar() {
    this.navContainer.innerHTML = `
      <figure class="nav__container__logo">
        <img src=${Logo} alt="logo" />
        </figure>
        `;

    return this.nav;
  }
}
