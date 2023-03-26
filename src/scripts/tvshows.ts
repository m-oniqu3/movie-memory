import { FullNav } from "../nav/FullNav";
import { tvShows } from "../utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;

// movies for swiper
swiperWrapper.innerHTML = tvShows
  .map((movie) => {
    return `
    <div class="swiper-slide">
      <img src="${movie.src}" alt="movie" />

      <div class="overlay"></div>

      <article class="movie-container">
        <div class="container">
          <h3 class="heading heading__medium">${movie.title}</h3>
          <p class="text">${movie.desc}</p>
          </div>
        </article>
    </div> `;
  })
  .join("");
