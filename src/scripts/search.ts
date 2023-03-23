import { SearchMovies } from "../movies/SearchMovies";
import { FullNav } from "../nav/FullNav";

const nav = new FullNav();
nav.generateNavbar();

const menu = document.getElementById("menu") as HTMLElement;

menu.addEventListener("click", () => {
  nav.showNavLink();
});

const form = document.querySelector("form") as HTMLFormElement;

const searchResultsSection = document.querySelector(
  ".search__results"
) as HTMLElement;

const searchMovies = new SearchMovies(searchResultsSection);
searchMovies.generateMoviesContent();

// const searchInput = async (input: string) => {
//   const apiKey = import.meta.env.VITE_API_KEY;

//   const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const input = document.querySelector("input") as HTMLInputElement;

    if (input.value === "") return;

    //  searchInput(input.value);
  }
});
