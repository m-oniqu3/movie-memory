import ErrorImage from "./../assets/undraw_home_cinema_l7yl.svg";
import { Movies } from "./Movies";

export class TvShows extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private renderContent(data: any, placeholder: HTMLElement) {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    if (data.length === 0) {
      heading = this.generateHeading("No Popular Tv Shows");
      article.innerHTML = "";
      article = heading;
      this.clearPlaceholderElement(placeholder);
    } else {
      heading = this.generateHeading("Popular Tv Shows");
      const movieGrid = this.generateMovieGrid(data, "tv");

      article.innerHTML = "";
      article.append(heading, movieGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  private renderErrorContent() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    heading = this.generateHeading("Popular Tv Shows");

    article.innerHTML = `
      ${heading.outerHTML}

      <div class="movies__error">
        <figure>
          <img src="${ErrorImage}" alt="Error loading popular tv shows" class="movies__error--image">
        </figure>

        <h1 class="heading heading__small--white">Error Loading Popular Tv Shows</h1>
        <p class="text">There was an error fetching the data. Try searching for a movie or show.</p>

        <a href="/search.html" class="button button__primary">Search Movies</a>
      </div>

    `;
    this.container.append(article);
  }

  private async getPopularTvShows() {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");
    this.container.innerHTML = "";

    try {
      const topRatedTvShows = await this.fetchMovies(url, "popularTvShows");
      this.renderContent(topRatedTvShows, placeholder);
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent();
    }
  }

  public generateContent(): void {
    this.getPopularTvShows();
  }
}
