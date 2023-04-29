import EmptyImage from "./../assets/no_data.svg";
import { Movies } from "./Movies";

type SearchResultsProps = {
  fetchedData: any;
  placeholder: HTMLElement;
  heading: HTMLHeadingElement;
};
export class SearchMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  private renderContent(info: SearchResultsProps) {
    let { fetchedData, placeholder, heading: headingProp } = info;
    let heading = headingProp;
    let article = document.createElement("article");

    if (fetchedData.length === 0) {
      heading = this.generateHeading("No results found");
      article.innerHTML = "";
      article.innerHTML = `
        ${heading.outerHTML}
        <div class="search__error">
          <figure>
            <img src="${EmptyImage}" alt="Error loading search results" class="search__error--image">
          </figure>

          <h1 class="heading heading__small--white">Oops!</h1>
          <p class="text">There were no results found for your search. Try searching for something else.</p>

        </div>

      `;
      this.clearPlaceholderElement(placeholder);
    } else {
      const movieGrid = this.generateMovieGrid(fetchedData);
      article.innerHTML = "";
      article.append(heading, movieGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  private renderErrorContent() {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    heading = this.generateHeading("No Results");

    article.innerHTML = `
      ${heading.outerHTML}

      <div class="search__error">
        <figure>
          <img src="${EmptyImage}" alt="no data" class="search__error--image">
        </figure>

        <h1 class="heading heading__small--white">No Data</h1>
        <p class="text">There was an error fetching the data. Try searching for something else.</p>

      </div>

    `;
    this.container.append(article);
  }

  public async generateSearchResults(input: string) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${input}&page=1&include_adult=false`;

    const placeholder = this.populateLoadingPlaceholder("search__placeholder");
    const heading = this.generateHeading(`Results for ${input.toLowerCase()}`);

    this.container.innerHTML = "";

    try {
      const searchResults = await this.fetchMovies(url, input);
      this.renderContent({ fetchedData: searchResults, placeholder, heading });
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent();

      console.log(error);
    }
  }

  public async generateFrequentlySearchedFor() {
    const heading = this.generateHeading("Frequently searched for");
    const placeholder = this.populateLoadingPlaceholder("search__placeholder");
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

    this.container.innerHTML = "";

    try {
      const trendingFilms = await this.fetchMovies(url, "trends");
      this.renderContent({ fetchedData: trendingFilms, placeholder, heading });
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent();

      console.log(error);
    }
  }

  public generateMoviesContent(): void {
    this.generateFrequentlySearchedFor();
  }
}
