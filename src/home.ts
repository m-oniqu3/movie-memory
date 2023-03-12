import { FullNav } from "./nav/FullNav";
import { movies } from "./utils/movies";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

// get movies

const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;

swiperWrapper.innerHTML = movies
  .map((movie) => {
    return `
    <div class="swiper-slide">
      <img src="${movie.src}" alt="movie" />

      <div class="movie-container">
        <div class="movie">
          <h3>${movie.title}</h3>
          <p>${movie.desc}</p>
        </div>
      </div>
     
    </div>


  `;
  })
  .join("");

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
