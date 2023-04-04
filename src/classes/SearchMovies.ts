import { Movies } from "./Movies";

type SearchResultsProps = {
  fetchedData: any;
  article: HTMLElement;
  placeholder: HTMLElement;
  heading: HTMLHeadingElement;
};
export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private showSearchResults(info: SearchResultsProps) {
    let { fetchedData, article, placeholder, heading } = info;

    if (fetchedData.length === 0) {
      heading = this.generateHeading("No results found");

      article.innerHTML = "";
      article = heading;

      this.clearPlaceholderElement(placeholder);
    } else {
      const movieGrid = this.generateMovieGrid(fetchedData);

      article.innerHTML = "";
      article.append(heading, movieGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  public async generateSearchResults(input: string) {
    let heading = this.generateHeading(`Results for ${input.toLowerCase()}`);
    let article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("search__placeholder");

    try {
      const searchResults = await this.fetchMovies(url, input);

      this.showSearchResults({
        fetchedData: searchResults,
        article,
        placeholder,
        heading,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async generateFrequentlySearchedFor() {
    const heading = this.generateHeading("Frequently searched for");
    let article = document.createElement("article");
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

    this.container.innerHTML = "";
    const placeholder = this.populateLoadingPlaceholder("search__placeholder");

    try {
      const trendingFilms = await this.fetchMovies(url, "trends");

      this.showSearchResults({
        fetchedData: trendingFilms,
        article,
        placeholder,
        heading,
      });
    } catch (error) {
      console.log(error);
    }
  }

  generateMoviesContent(): void {
    this.generateFrequentlySearchedFor();
  }
}
