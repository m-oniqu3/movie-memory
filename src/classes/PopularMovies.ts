import { Movies } from "./Movies";

export class PopularMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private renderContent = (data: any, placeholder: HTMLElement) => {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    if (data.length === 0) {
      heading = this.generateHeading("No Popular Movies");

      article.innerHTML = "";
      article = heading;
      this.clearPlaceholderElement(placeholder);
    } else {
      heading = this.generateHeading("Popular Movies");
      const movieGrid = this.generateMovieGrid(data, "movie");

      article.innerHTML = "";
      article.append(heading, movieGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  };

  private async getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");
    this.container.innerHTML = "";

    try {
      const popularMovies = await this.fetchMovies(url, "popularMovies");
      this.renderContent(popularMovies, placeholder);
    } catch (error) {
      console.log(error);
    }
  }

  public generateContent(): void {
    this.getPopularMovies();
  }
}
