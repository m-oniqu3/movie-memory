import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  generatePopularMovies() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Movies");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    const popularMovies = this.fetchMovies(url, "popularMovies");

    // let movieGrid = this.generatePlaceHolderMovieGrid();

    popularMovies.then((movies) => {
      const movieGrid = this.generateMovieGrid(movies);
      article.append(movieGrid);
    });

    article.append(heading);
    this.container.append(article);
  }

  generatePopularShows() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Shows");
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    const popularShows = this.fetchMovies(url, "popularShows");

    popularShows.then((movies) => {
      const movieGrid = this.generateMovieGrid(movies);
      article.append(movieGrid);
    });

    article.append(heading);
    this.container.append(article);
  }

  generateBanner() {}

  generateMoviesContent() {
    this.generatePopularMovies();
    this.generatePopularShows();
  }
}
