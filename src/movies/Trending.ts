import { getTrendingData } from "../pages/helpers";

export class TrendingMovies {
  container: HTMLElement;
  constructor(container: HTMLElement) {
    this.container = container;
  }

  getTrendingMovie() {
    getTrendingData().then((data) => {
      this.container.style.background = `url(https://image.tmdb.org/t/p/w500${data})`;
    });
  }
}
