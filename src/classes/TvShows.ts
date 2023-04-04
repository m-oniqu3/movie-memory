import { Movies } from "./Movies";

export class TvShows extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private async getPopularTvShows() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;
    // let heading = this.generateHeading("Popular Tv Shows");
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const topRatedTvShows = await this.fetchMovies(url, "popularTvShows");

      if (topRatedTvShows.length === 0) {
        heading = this.generateHeading("No Popular Tv Shows");
        article.innerHTML = "";
        article = heading;
        this.clearPlaceholderElement(placeholder);
      } else {
        heading = this.generateHeading("Popular Tv Shows");
        const movieGrid = this.generateMovieGrid(topRatedTvShows, "tv");

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
    this.getPopularTvShows();
  }
}
