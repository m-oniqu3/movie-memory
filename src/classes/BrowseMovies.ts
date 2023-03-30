import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private async generatePopularMovies() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Upcoming Movies");
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`;

    try {
      const upcomingMovies = await this.fetchMovies(url, "upcomingMovies");
      const movieGrid = this.generateMovieGrid(upcomingMovies, "movie");

      article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }
  generateContent() {
    this.generatePopularMovies();
  }
}
