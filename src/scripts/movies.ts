import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { popularMovies as movies } from "../utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, movies);
slideshow.generateSlideShow();
