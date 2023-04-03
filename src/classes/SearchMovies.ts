import { Movies } from "./Movies";

export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  async generateSearchResults(input: string) {
    let heading = this.generateHeading(`Results for ${input.toLowerCase()}`);
    let article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("search__placeholder");

    try {
      const searchResults = await this.fetchMovies(url, input);

      if (searchResults.length === 0) {
        heading = this.generateHeading("No results found");

        article.innerHTML = "";
        article = heading;

        this.clearPlaceholderElement(placeholder);
      } else {
        console.log({ searchResults });

        const movieGrid = this.generateMovieGrid(searchResults);

        article.innerHTML = "";
        article.append(heading, movieGrid);
        this.clearPlaceholderElement(placeholder);
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
