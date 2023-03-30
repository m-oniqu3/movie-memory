import { BrowseMovies } from "../classes/BrowseMovies";
import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { movies } from "../utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

const browsemovies = new BrowseMovies(moviesSection);
browsemovies.generateContent();

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, movies);
slideshow.generateSlideShow();
