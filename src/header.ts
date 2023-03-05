import DarkLogo from "./assets/dark_logo.png";
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

export class DarkBaseNav extends BaseNav {
  windowWidth: number;

  constructor() {
    super();
    this.windowWidth = 0;
  }

  getWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  // override
  generateNavbar() {
    const nav = document.querySelector(".nav") as HTMLElement;
    nav.classList.add("nav");
    const imageSrc = this.windowWidth > 768 ? Logo : DarkLogo;

    nav.innerHTML = `
      <figure class="nav__logo">
        <img src=${imageSrc} alt="logo" />
        </figure>
        `;

    return nav;
  }

  generateNavOnResize() {
    const generateNavAndWidth = () => {
      this.getWindowWidth();
      this.generateNavbar();
    };

    window.addEventListener("load", generateNavAndWidth);
    window.addEventListener("resize", generateNavAndWidth);
  }
}
