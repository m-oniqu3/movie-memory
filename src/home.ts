import { FullNav } from "./nav/FullNav";
import { Page } from "./pages/Page";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;
const navLinks = document.querySelectorAll(".nav__container__link");

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const page = new Page();
page.showContentForActivePage();

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const value = e.target as HTMLAnchorElement;
    page.setActivePage(value.text);
    page.showContentForActivePage();
  });
});
