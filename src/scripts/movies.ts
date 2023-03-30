import { PopularMovies } from "../classes/PopularMovies";
import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { popularMovies as movies } from "../utils/movies";

// generate navbar
const nav = new FullNav();
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

const moviesSection = document.querySelector(".movies-section") as HTMLElement;
const popularMovies = new PopularMovies(moviesSection);
popularMovies.generateContent();
