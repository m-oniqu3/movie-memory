import Logo from "../assets/logo.png";
import MenuIcon from "../assets/menu_icon.svg";
import SearchIcon from "../assets/search_icon.svg";
import UserIcon from "../assets/user_icon.svg";

import { BaseNav } from "./BaseNav";

export class FullNav extends BaseNav {
  constructor() {
    super();
  }

  showNavLink(): void {
    const navLinks = document.querySelector(".nav__container__links") as HTMLElement;

    navLinks.classList.toggle("nav__container__links--active");
    this.nav.classList.toggle("nav--active");
  }

  generateNavbar() {
    this.navContainer.innerHTML = `
      <figure class="nav__container__logo">
        <img src=${Logo} alt="logo" />
        </figure>

        <ul class="nav__container__links">
          <li class="nav__container__item">
            <a href="browse.html" class="nav__container__link">Home</a>
          </li>
          <li class="nav__container__item">
            <a href="#" class="nav__container__link">Memories</a>
          </li>
          <li class="nav__container__item">
            <a href="tvshows.html" class="nav__container__link">TV Shows</a>
          </li>
            <li class="nav__container__item">
            <a href="movies.html" class="nav__container__link">Movies</a>
          </li>
        </ul>


        <div class="nav__container__icons">
         <figure class="nav__container__icon" onclick={window.location.href="search.html"}>
            <img src=${SearchIcon} alt="search icon" />
          </figure>

           <figure class="nav__container__icon">
            <img src=${UserIcon} alt="user icon" />
          </figure>

          <figure class="nav__container__icon" id="menu">
            <img src=${MenuIcon} alt="menu icon" />
          </figure>

         
        </div>
        `;

    window.addEventListener("load", this.showActiveLink);

    return this.nav;
  }

  showActiveLink() {
    const allLinks = document.querySelectorAll(".nav__container__link") as NodeListOf<HTMLAnchorElement>;
    const currentPath = window.location.pathname.replace("/", "");

    allLinks.forEach((link: HTMLAnchorElement) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("nav__container__link--active");
      } else {
        link.classList.remove("nav__container__link--active");
      }
    });
  }
}
