import ErrorImage from "./../assets/undraw_movie_night_re_9umk.svg";
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

  private renderErrorContent() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    heading = this.generateHeading("Upcoming Movies");

    article.innerHTML = `
      ${heading.outerHTML}

      <div class="movies__error">
        <figure>
          <img src="${ErrorImage}" alt="Error loading upcoming movies" class="movies__error--image">
        </figure>

        <h1 class="heading heading__small--white">Error Loading Upcoming Movies</h1>
        <p class="text">There was an error fetching the data. Try searching for a movie or show.</p>

        <a href="/search.html" class="button button__primary">Search Movies</a>
      </div>

    `;
    this.container.append(article);
  }

  private async getPopularMovies() {
    const url = `https://api.themovie.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");
    this.container.innerHTML = "";

    try {
      const popularMovies = await this.fetchMovies(url, "popularMovies");
      this.renderContent(popularMovies, placeholder);
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent();

      console.log(error);
    }
  }

  public generateContent(): void {
    this.getPopularMovies();
  }
}
