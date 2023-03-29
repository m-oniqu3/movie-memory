import { SlideShow } from "../classes/SildeShow";
import { FullNav } from "../nav/FullNav";
import { tvShows } from "../utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

// create slideshow
const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
const slideshow = new SlideShow(swiperWrapper, tvShows);
slideshow.generateSlideShow();
