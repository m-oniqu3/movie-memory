import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private generateMoviesPlacheholder(): HTMLDivElement {
    const div = document.createElement("div");
    div.classList.add("browse__placeholder");

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

  private async generatePopularMovies() {
    let article = document.createElement("article");
    const heading = this.generateHeading("Upcoming Movies");
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";

    const load = document.querySelector(".browse__placeholder") as HTMLDivElement;
    load.innerHTML = this.generateMoviesPlacheholder().innerHTML;
    load.style.padding = "3rem 0";

    try {
      const upcomingMovies = await this.fetchMovies(url, "upcomingMovies");

      if (upcomingMovies.length === 0) {
        // heading = this.generateHeading("No results found");

        article.innerHTML = "";
        article = heading;

        load.innerHTML = "";
        load.style.padding = "0";
      } else {
        console.log({ upcomingMovies });

        const movieGrid = this.generateMovieGrid(upcomingMovies, "movie");

        article.innerHTML = "";
        article.append(heading, movieGrid);
        load.innerHTML = "";
        load.style.padding = "0";
      }

      // const movieGrid = this.generateMovieGrid(upcomingMovies, "movie");

      // article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  generateContent() {
    this.generatePopularMovies();
  }
}
