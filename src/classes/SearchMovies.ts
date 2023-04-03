import { Movies } from "./Movies";

export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private generateSearchPlaceholder(): HTMLDivElement {
    const div = document.createElement("div");
    div.classList.add("search__placeholder");

    //movie grid with 20 placeholders
    const movieGrid = document.createElement("div");
    movieGrid.classList.add("movie-grid");

    for (let i = 0; i < 20; i++) {
      const movie = document.createElement("div");
      movie.classList.add("movie-grid__item");
      movie.innerHTML = `<div class="movie-grid__item__placeholder"></div>`;
      movieGrid.append(movie);
    }

    div.append(movieGrid);

    return div;
  }

  async generateSearchResults(input: string) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;

    this.container.innerHTML = "";

    const load = document.querySelector(".search__placeholder") as HTMLDivElement;
    load.innerHTML = this.generateSearchPlaceholder().innerHTML;
    load.style.padding = "3rem 0";

    let heading = this.generateHeading(`Results for ${input.toLowerCase()}`);
    let article = document.createElement("article");

    try {
      // todo handle case for no results
      // todo : create method to empty load
      const searchResults = await this.fetchMovies(url, input);

      if (searchResults.length === 0) {
        heading = this.generateHeading("No results found");

        article.innerHTML = "";
        article = heading;

        load.innerHTML = "";
        load.style.padding = "0";
      } else {
        console.log({ searchResults });

        const movieGrid = this.generateMovieGrid(searchResults);

        article.innerHTML = "";
        article.append(heading, movieGrid);
        load.innerHTML = "";
        load.style.padding = "0";
      }

      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  async generateFrequentlySearchedFor() {
    const heading = this.generateHeading("Frequently searched for");
    const article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

    try {
      const trendingFilms = await this.fetchMovies(url, "trends");
      const movieGrid = this.generateMovieGrid(trendingFilms);

      article.append(heading, movieGrid);
      this.container.innerHTML = "";
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  generateMoviesContent(): void {
    this.generateFrequentlySearchedFor();
  }
}
