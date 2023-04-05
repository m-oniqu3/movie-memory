import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  renderContent(data: any, placeholder: HTMLElement) {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    if (data.length === 0) {
      heading = this.generateHeading("No Upcoming Movies");

      //todo: show some error image here
      article.innerHTML = "";
      article = heading;
      this.clearPlaceholderElement(placeholder);
    } else {
      heading = this.generateHeading("Upcoming Movies");
      const movieGrid = this.generateMovieGrid(data, "movie");

      article.innerHTML = "";
      article.append(heading, movieGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  private async generatePopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const upcomingMovies = await this.fetchMovies(url, "upcomingMovies");
      this.renderContent(upcomingMovies, placeholder);
    } catch (error) {
      console.log(error);
    }
  }

  generateContent() {
    this.generatePopularMovies();
  }
}
