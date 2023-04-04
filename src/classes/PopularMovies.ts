import { Movies } from "./Movies";

export class PopularMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private async getPopularMovies() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;
    //this.generateHeading("Popular Movies");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const popularMovies = await this.fetchMovies(url, "popularMovies");

      if (popularMovies.length === 0) {
        heading = this.generateHeading("No Popular Movies");

        article.innerHTML = "";
        article = heading;
        this.clearPlaceholderElement(placeholder);
      } else {
        heading = this.generateHeading("Popular Movies");
        const movieGrid = this.generateMovieGrid(popularMovies, "movie");

        article.innerHTML = "";
        article.append(heading, movieGrid);
        this.clearPlaceholderElement(placeholder);
      }

      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  public generateContent(): void {
    this.getPopularMovies();
  }
}
