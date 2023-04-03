import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  clearPlaceholderElement(element: HTMLElement) {
    element.innerHTML = "";
    element.style.padding = "0";
  }

  private async generatePopularMovies() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("browse__placeholder");

    try {
      const upcomingMovies = await this.fetchMovies(url, "upcomingMovies");

      if (upcomingMovies.length === 0) {
        heading = this.generateHeading("No results found");

        article.innerHTML = "";
        article = heading;
        this.clearPlaceholderElement(placeholder);
      } else {
        heading = this.generateHeading("Upcoming Movies");
        const movieGrid = this.generateMovieGrid(upcomingMovies, "movie");

        article.innerHTML = "";
        article.append(heading, movieGrid);
        this.clearPlaceholderElement(placeholder);
      }

      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  generateContent() {
    this.generatePopularMovies();
  }
}
