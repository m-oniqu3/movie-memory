import { Movies } from "./Movies";

export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  async generateSearchResults(input: string) {
    const p = document.createElement("p");
    p.innerText = "searching";
    console.log(input);

    this.container.innerHTML = p.innerText;

    //   const apiKey = import.meta.env.VITE_API_KEY;
    //   const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data);
  }

  async generateFrequentlySearchedFor() {
    const heading = this.generateHeading("Frequently searched for");
    const article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

    try {
      const trendingFilms = await this.fetchMovies(url, "trends");
      const movieGrid = this.generateMovieGrid(trendingFilms);

      article.append(heading, movieGrid);
      this.container.append(article);
    } catch (error) {
      console.log(error);
    }
  }

  generateMoviesContent(): void {
    this.generateFrequentlySearchedFor();
  }
}
