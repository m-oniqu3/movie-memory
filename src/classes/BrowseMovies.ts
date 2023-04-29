import ErrorImage from "./../assets/undraw_movie_night_re_9umk.svg";
import { Movies } from "./Movies";

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  renderContent(data: any, placeholder: HTMLElement) {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    if (data.length === 0 || data === undefined) {
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

    console.log(article);
    this.container.append(article);
  }

  renderErrorContent() {
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

  private async generatePopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const upcomingMovies = await this.fetchMovies(url, "upcomingMovies");
      this.renderContent(upcomingMovies, placeholder);
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent();

      console.log(error);
    }
  }

  generateContent() {
    this.generatePopularMovies();
  }
}
