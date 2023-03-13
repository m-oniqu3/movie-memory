import { BrowseMovies } from "./movies/Movies";
import { FullNav } from "./nav/FullNav";
import { movies } from "./utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;
// movies for swiper
swiperWrapper.innerHTML = movies
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
   
     
    </div>


  `;
  })
  .join("");

const moviesSection = document.querySelector(".movies-section") as HTMLElement;

const browsemovies = new BrowseMovies(moviesSection);
browsemovies.generateMoviesContent();

//const apiKey = import.meta.env.VITE_API_KEY;

// const getMovies = async () => {
//   //omdb url
//   const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=love&type=movie`;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   // content.style.background = `url(${data.Search[0].Poster})`;
// };

// getMovies();
