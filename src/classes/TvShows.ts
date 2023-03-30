import { Movies } from "./Movies";

export class TvShows extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private async getPopularTvShows() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Tv Shows");
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    try {
      const topRatedTvShows = await this.fetchMovies(url, "popularTvShows");
      const movieGrid = this.generateMovieGrid(topRatedTvShows, "tv");

      article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  public generateContent(): void {
    this.getPopularTvShows();
  }
}
