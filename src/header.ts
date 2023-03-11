import DarkLogo from "./assets/dark_logo.png";
import Logo from "./assets/logo.png";

import MenuIcon from "./assets/menu_icon.svg";
import SearchIcon from "./assets/search_icon.svg";
import UserIcon from "./assets/user_icon.svg";
export class BaseNav {
  nav: HTMLElement;
  navContainer: HTMLElement;

  constructor() {
    this.nav = document.querySelector(".nav ") as HTMLElement;
    this.navContainer = document.querySelector(
      ".nav .container"
    ) as HTMLElement;
  }

  generateNavbar() {
    this.nav.classList.add("nav");
    this.nav.innerHTML = `
      <figure class="nav__logo">
        <img src=${Logo} alt="logo" />
        </figure>
        `;

    return this.nav;
  }

  showNavLink() {}
}

export class FullNav extends BaseNav {
  constructor() {
    super();
  }
  showNavLink(): void {
    console.log("show nav link");

    const navLinks = document.querySelector(".nav__links") as HTMLElement;
    navLinks.classList.toggle("nav__links--active");
    this.nav.classList.toggle("nav--active");
  }
  generateNavbar() {
    this.navContainer.classList.add("nav");
    this.navContainer.innerHTML = `
      <figure class="nav__logo">
        <img src=${Logo} alt="logo" />
        </figure>

        <ul class="nav__links">
          <li class="nav__item">
            <a href="#" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Memories</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">TV Shows</a>
          </li>
            <li class="nav__item">
            <a href="#" class="nav__link">Movies</a>
          </li>
        </ul>


        <div class="nav__icons">
         <figure class="nav__icon">
            <img src=${SearchIcon} alt="search icon" />
          </figure>

           <figure class="nav__icon">
            <img src=${UserIcon} alt="user icon" />
          </figure>

          <figure class="nav__icon" id="menu">
            <img src=${MenuIcon} alt="menu icon" />
          </figure>

         
        </div>
        `;

    return this.nav;
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
    this.nav.classList.add("nav");
    const imageSrc = this.windowWidth > 900 ? Logo : DarkLogo;

    this.nav.innerHTML = `
      <figure class="nav__logo">
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
