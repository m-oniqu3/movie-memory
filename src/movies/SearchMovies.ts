import { Movies } from "./Movies";

export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  generateFrequentlySearchedFor() {
    const heading = this.generateHeading("Frequently searched for");
    const article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

    const trendingFilms = this.fetchMovies(url, "trends");

    console.log({ trendingFilms });

    trendingFilms.then((film) => {
      console.log(film);

      const movieGrid = this.generateMovieGrid(film, film.media_type);
      article.append(movieGrid);
    });

    article.append(heading);
    this.container.append(article);
  }

  generateMoviesContent(): void {
    this.generateFrequentlySearchedFor();
  }
}
