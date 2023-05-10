import { Footer } from "../classes/Footer";
import { Memories } from "../classes/Memories";
import { FullNav } from "../nav/FullNav";

const logoutModal = document.querySelector(".logout-modal") as HTMLElement;
const nav = new FullNav(logoutModal);
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

const memories = new Memories(moviesSection);
memories.generateContent();

const footer = document.querySelector("footer") as HTMLElement;
const footerSection = new Footer(footer);
footerSection.generateFooter();
