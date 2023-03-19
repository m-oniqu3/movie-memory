import Icons from "../assets/icons.svg";

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
        console.log("getting from local storage");
        console.log(JSON.parse(data));

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

  //fetch movie by id
  async fetchMovieById(id: string) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getMovieDetails(movieId: string) {
    const results = this.fetchMovieById(movieId);
    console.log("movie", results);

    const movieImage = document.createElement("figure");
    movieImage.classList.add("modal__content--image");

    const movieDetails = document.createElement("div");
    movieDetails.classList.add("modal__content--details");

    const movieTitle = document.createElement("h1");
    movieTitle.classList.add("heading", "heading__small--dark");

    const movieCast = document.createElement("p");
    movieCast.classList.add("text", "cast");

    const movieDate = document.createElement("p");
    movieDate.classList.add("text");

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("text", "description");

    const movieIcons = document.createElement("div");
    if (!results) {
    }

    results.then((data) => {
      movieTitle.innerText = data.title;
      movieImage.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="movie image" class="movie-image"/>
      `;
      movieCast.innerText = data.genres
        .map((genre: any) => genre.name)
        .join(", ");
      movieDate.innerText = new Date(data.release_date)
        .getFullYear()
        .toString();
      movieDescription.innerText = data.overview || "No description available";
      movieIcons.innerHTML = `
    <img src=${Icons} alt="icons" class="icons"/>
    `;
    });

    movieDetails.append(
      movieTitle,
      movieCast,
      movieDate,
      movieDescription,
      movieIcons
    );

    return { movieImage, movieDetails };
  }

  showMovieDetailsModal(movieId: string) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const modalContent = document.createElement("article");
    modalContent.classList.add("modal__content");

    const { movieImage, movieDetails } = this.getMovieDetails(movieId);

    modalContent.append(movieImage, movieDetails);

    // close modal and allow scrolling
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";

        //remove modal from dom
        modal.remove();
      }
    };
    //

    modal.append(modalContent);

    //add modal to body
    this.container.append(modal);
  }

  generateMovieGrid(movies: any[]) {
    const movieGrid = document.createElement("div");
    movieGrid.classList.add("movie-grid");

    movies.forEach((movie) => {
      const movieImage = document.createElement("img");
      movieImage.classList.add("movie-image");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      movieImage.addEventListener("click", () => {
        this.showMovieDetailsModal(movie.id);
      });

      movieGrid.append(movieImage);
    });

    return movieGrid;
  }

  generateMoviesContent() {}
}
