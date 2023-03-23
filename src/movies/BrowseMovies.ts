import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  async generatePopularMovies() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Movies");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    try {
      const popularMovies = await this.fetchMovies(url, "popularMovies");
      const movieGrid = this.generateMovieGrid(popularMovies, "movie");

      article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  async generatePopularShows() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Shows");
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

    try {
      const popularShows = await this.fetchMovies(url, "popularShows");
      const movieGrid = this.generateMovieGrid(popularShows, "tv");

      article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  generateBanner() {}

  generateMoviesContent() {
    this.generatePopularMovies();
    this.generatePopularShows();
  }
}
