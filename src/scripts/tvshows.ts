import { SlideShow } from "../classes/SildeShow";
import { TvShows } from "../classes/TvShows";
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

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

const tvSeries = new TvShows(moviesSection);
tvSeries.generateContent();
