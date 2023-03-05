import Logo from "./assets/logo.png";

export class BaseNav {
  generateNavbar() {
    const nav = document.querySelector(".nav") as HTMLElement;

    nav.classList.add("nav");
    nav.innerHTML = `
      <figure class="nav__logo">
        <img src=${Logo} alt="logo" />
        </figure>
        `;

    return nav;
  }
}
