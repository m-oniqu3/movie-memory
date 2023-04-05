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

  private async getPopularTvShows() {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");
    this.container.innerHTML = "";

    try {
      const topRatedTvShows = await this.fetchMovies(url, "popularTvShows");
      this.renderContent(topRatedTvShows, placeholder);
    } catch (error) {
      console.log(error);
    }
  }

  public generateContent(): void {
    this.getPopularTvShows();
  }
}
