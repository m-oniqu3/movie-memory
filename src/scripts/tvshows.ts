import { Footer } from "../classes/Footer";
import { SlideShow } from "../classes/SildeShow";
import { TvShows } from "../classes/TvShows";
import { FullNav } from "../nav/FullNav";
import { tvShows } from "../utils/movies";

const user = JSON.parse(localStorage.getItem("user") || "{}");
const isAuthenicated = user.uid ? true : false;

if (!isAuthenicated) {
  window.location.pathname = "./src/pages/account.html";
}

const logoutModal = document.querySelector(".logout-modal") as HTMLElement;
const nav = new FullNav(logoutModal);
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, tvShows);
slideshow.generateSlideShow();

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

// display popular tv shows
const tvSeries = new TvShows(moviesSection);
tvSeries.generateContent();

// create footer
const footer = document.querySelector("footer") as HTMLElement;
const footerSection = new Footer(footer);
footerSection.generateFooter();
