import { SearchMovies } from "../movies/SearchMovies";
import { FullNav } from "../nav/FullNav";

// generate navbar
const nav = new FullNav();
nav.generateNavbar();

// show mobile menu
const menu = document.getElementById("menu") as HTMLElement;
menu.addEventListener("click", () => {
  nav.showNavLink();
});

const form = document.querySelector("form") as HTMLFormElement;
const formInput = document.querySelector(" input") as HTMLInputElement;
const searchResultsSection = document.querySelector(
  ".search__results"
) as HTMLElement;

// generate the movies on the search page
const searchMovies = new SearchMovies(searchResultsSection);
searchMovies.generateMoviesContent();

// listen to input
formInput.addEventListener("input", (e) => {
  e.preventDefault();

  if (!formInput.value) {
    console.log("it is empty ");
    searchMovies.generateFrequentlySearchedFor();
  }
});

// submit form
form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    if (formInput.value === "") return;
    searchMovies.generateSearchResults(formInput.value);
  }
});
