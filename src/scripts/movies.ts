import { Footer } from "../classes/Footer";
import { PopularMovies } from "../classes/PopularMovies";
import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { popularMovies as movies } from "../utils/movies";

const user = JSON.parse(localStorage.getItem("user") || "{}");
const isAuthenicated = user.uid ? true : false;

if (!isAuthenicated) {
  window.location.href = "/account.html";
}

// generate navbar
const logoutModal = document.querySelector(".logout-modal") as HTMLElement;
const nav = new FullNav(logoutModal);
nav.generateNavbar();

// show mobile navbar
const menu = document.getElementById("menu") as HTMLElement;
menu.addEventListener("click", () => {
  nav.showNavLink();
});

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, movies);
slideshow.generateSlideShow();

// display popular movies
const moviesSection = document.querySelector(".movies-section") as HTMLElement;
const popularMovies = new PopularMovies(moviesSection);
popularMovies.generateContent();

// create footer
const footer = document.querySelector("footer") as HTMLElement;
const footerSection = new Footer(footer);
footerSection.generateFooter();
