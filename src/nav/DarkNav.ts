import DarkLogo from "../assets/dark_logo.png";
import Logo from "../assets/logo.png";
import { BaseNav } from "../nav/BaseNav";

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
    const imageSrc = this.windowWidth > 900 ? Logo : DarkLogo;

    this.navContainer.innerHTML = `
      <figure class="nav__container__logo">
        <img src=${imageSrc} alt="logo" />
        </figure>
        `;

    return this.nav;
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
