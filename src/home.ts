import InfinityWar from "../src/assets/avengers-infinity-war_dd0f_2880x1800.jpg";
import BigHeroSix from "../src/assets/big-hero-6_29fe_2880x1800.jpg";
import DCLegends from "../src/assets/dcs-legends-of-tomorrow_bec9_2880x1800.jpg";
import Inception from "../src/assets/inception_286e_2880x1800.jpg";
import Interstellar from "../src/assets/interstellar_d112_2880x1800.jpg";
import DarkKnight from "../src/assets/the-dark-knight_0ee9_2880x1800.jpg";
import GodFather from "../src/assets/the-godfather_4acf_2880x1800.jpg";
import { FullNav } from "./nav/FullNav";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

// get movies

const swiperWrapper = document.querySelector(".swiper-wrapper") as HTMLElement;

const heroMovies = [
  {
    src: Inception,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: Interstellar,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: InfinityWar,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: BigHeroSix,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },

  {
    src: DarkKnight,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: GodFather,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
  {
    src: DCLegends,
    title: "Inception",

    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, doloremque. Iure ab modi quibusdam cumque! Ut earum praesentium repellat, veritatis fugiat eveniet cumque voluptatibus expedita porro, enim hic ullam aliquid!",
  },
];

swiperWrapper.innerHTML = heroMovies
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
