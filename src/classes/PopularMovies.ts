import { Movies } from "./Movies";

export class PopularMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private async getPopularMovies() {
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

  public generateContent(): void {
    this.getPopularMovies();
  }
}
