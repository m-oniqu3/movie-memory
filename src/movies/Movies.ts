export class Movies {
  container: HTMLElement;
  apiKey: any;

  constructor(container: HTMLElement) {
    this.container = container;
    this.apiKey = import.meta.env.VITE_API_KEY;
  }

  generateHeading(text: string) {
    const heading = document.createElement("h1");
    heading.classList.add("heading", "heading__small--white");
    heading.innerText = text;
    return heading;
  }

  //async resuable function that accepts a url and returns a promise
  async fetchMovies(url: string, key: string) {
    try {
      //check if data is in local storage
      const data = localStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      } else {
        const response = await fetch(url);
        const data = await response.json();

        //save to local storage
        localStorage.setItem(key, JSON.stringify(data.results.slice(0, 18)));
        return data.results.slice(0, 18);
      }
    } catch (error) {
      console.log(error);
      //select a div and display error message
    }
  }

  generateMovieGrid(movies: any[]) {
    const movieGrid = document.createElement("div");
    movieGrid.classList.add("movie-grid");

    movies.forEach((movie) => {
      const movieImage = document.createElement("img");
      movieImage.classList.add("movie-image");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      movieGrid.append(movieImage);
    });

    return movieGrid;
  }

  generateMoviesContent() {}
}

export class BrowseMovies extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  generatePopularMovies() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Movies");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    const popularMovies = this.fetchMovies(url, "popularMovies");

    popularMovies.then((movies) => {
      const movieGrid = this.generateMovieGrid(movies);
      article.append(movieGrid);
    });

    console.log(popularMovies);

    article.append(heading);
    this.container.append(article);
  }

  generatePopularShows() {
    const article = document.createElement("article");
    const heading = this.generateHeading("Popular Shows");
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
    const popularShows = this.fetchMovies(url, "popularShows");

    popularShows.then((movies) => {
      const movieGrid = this.generateMovieGrid(movies);
      article.append(movieGrid);
    });

    console.log(popularShows);

    article.append(heading);
    this.container.append(article);
  }

  generateBanner() {}

  generateMoviesContent() {
    this.generatePopularMovies();
    this.generatePopularShows();
  }
}
