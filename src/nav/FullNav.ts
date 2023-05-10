import CloseIcon from "../assets/close-icon.svg";
import Logo from "../assets/logo.png";
import MenuIcon from "../assets/menu_icon.svg";
import SearchIcon from "../assets/search_icon.svg";
import UserIcon from "../assets/user_icon.svg";
import { logOutUser } from "../firebase/firebase-config";

import { BaseNav } from "./BaseNav";

export class FullNav extends BaseNav {
  logoutModal: HTMLElement;

  constructor(logoutModal: HTMLElement) {
    super();
    this.logoutModal = logoutModal;
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
            <a href="memories.html#tvshows" class="nav__container__link">Memories</a>
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

           <figure class="nav__container__icon" id="user">
            <img src=${UserIcon} alt="user icon" />
          </figure>

          <figure class="nav__container__icon" id="menu">
            <img src=${MenuIcon} alt="menu icon" />
          </figure>

         
        </div>
        `;

    this.handleSideEffects();

    return this.nav;
  }

  //handle logout modal and active link
  handleSideEffects() {
    const user = document.getElementById("user") as HTMLElement;

    user.addEventListener("click", () => this.showLogoutModal());
    this.generateLogoutModal(this.logoutModal);
    window.addEventListener("load", this.showActiveLink);

    if (this.logoutModal.children.length > 0) {
      this.closeLogoutModal();
      this.handleButtonActions();
    }
  }

  handleButtonActions() {
    const cancelButton = document.querySelector(".logout-modal__buttons .button__secondary--dark") as HTMLButtonElement;
    const logoutButton = document.querySelector(".logout-modal__buttons .button__primary--dark") as HTMLButtonElement;

    cancelButton.addEventListener("click", () => {
      this.logoutModal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    logoutButton.addEventListener("click", async () => {
      await logOutUser();
    });
  }

  generateLogoutModal(modalElement: HTMLElement) {
    return (modalElement.innerHTML = `
       <div class="container">
      
        <article class="logout-modal__content">
         <figure class="close">
          <img src=${CloseIcon} alt="close icon" />
        </figure>

          <h1 class="heading heading__small--dark">Are you sure you want to logout?</h1>
          <p class="text">
            If you logout, you can pick up where you left off by logging back in. Your progress will be saved.
          </p>

          <div class="logout-modal__buttons">
            <button class="button button__primary--dark">Logout</button>
            <button class="button button__secondary--dark">Cancel</button>
          </div>

        </article>
      </div>
    `);
  }

  closeLogoutModal() {
    window.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;

      //close modal if user clicks outside of modal
      if (target.classList.contains("logout-modal")) {
        this.logoutModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    if (this.logoutModal.children.length > 0) {
      const closeIcon = document.querySelector(".logout-modal__content .close") as HTMLElement;

      closeIcon.addEventListener("click", () => {
        this.logoutModal.style.display = "none";
        document.body.style.overflow = "auto";
      });
    }
  }

  showLogoutModal() {
    this.logoutModal.style.display = "grid";
    document.body.style.overflow = "hidden";
  }

  showActiveLink() {
    const allLinks = document.querySelectorAll(".nav__container__link") as NodeListOf<HTMLAnchorElement>;
    const currentPath = window.location.pathname.replace("/", "");

    allLinks.forEach((link: HTMLAnchorElement) => {
      if (link.getAttribute("href") !== currentPath) {
        link.classList.remove("nav__container__link--active");
        return;
      }

      link.classList.add("nav__container__link--active");
    });
  }
}
