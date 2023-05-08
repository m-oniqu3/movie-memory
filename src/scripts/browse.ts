import { BrowseMovies } from "../classes/BrowseMovies";
import { Footer } from "../classes/Footer";
import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { movies } from "../utils/movies";

const user = JSON.parse(localStorage.getItem("user") || "{}");
const isAuthenicated = user.uid ? true : false;

if (!isAuthenicated) {
  window.location.href = "/account.html";
  console.log("not authenticated");
}

const logoutModal = document.querySelector(".logout-modal") as HTMLElement;
const nav = new FullNav(logoutModal);
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, movies);
slideshow.generateSlideShow();

// display upcoming movies
const browsemovies = new BrowseMovies(moviesSection);
browsemovies.generateContent();

const footer = document.querySelector("footer") as HTMLElement;
const footerSection = new Footer(footer);
footerSection.generateFooter();
