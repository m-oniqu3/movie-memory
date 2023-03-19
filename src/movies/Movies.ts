import Icons from "../assets/icons.svg";

interface FilmSummary {
  image: HTMLElement;
  details: HTMLDivElement;
}

interface Summary {
  posterPath: string;
  title: string;
  genres: { id: number; name: string }[];
  releaseDate: string;
  description: string;
}

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

  async fetchShowById(id: string) {
    try {
      const url = ` https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  generatePlaceHolderSummary(): FilmSummary {
    const image = document.createElement("figure");
    image.classList.add("modal__content--image");

    // set image to placeholder image
    image.innerHTML = `
    <div class="placeholder__image"></div>
    `;

    const details = document.createElement("div");
    details.classList.add("modal__content--details");
    details.innerHTML = `
      <div class=" placeholder__group">
        <div class="placeholder placeholder__title"></div>
        <div class="placeholder placeholder__text"></div>
        <div class="placeholder placeholder__text"></div>
        <div class="placeholder placeholder__desc"></div>
        <div class="placeholder placeholder__icons"></div>
      </div>`;

    return { image, details };
  }

  getMovieDetails(movieId: string): FilmSummary {
    const results = this.fetchMovieById(movieId);
    console.log("movie", results);

    const { image: placeholderImage, details: placeholderDetails } =
      this.generatePlaceHolderSummary();

    const image = document.createElement("figure");
    image.classList.add("modal__content--image");

    // set image to placeholder image
    image.innerHTML = placeholderImage.innerHTML;

    const details = document.createElement("div");
    details.classList.add("modal__content--details");
    details.innerHTML = placeholderDetails.innerHTML;

    results.then((data) => {
      const args = {
        posterPath: data.poster_path,
        title: data.title,
        genres: data.genres,
        releaseDate: data.release_date,
        description: data.overview,
      };
      const summary = this.generateSummary(args);

      image.innerHTML = summary.image;
      details.innerHTML = summary.details;
    });

    return { image, details };
  }

  generateSummary(data: Summary): { image: string; details: string } {
    const image = `
      <img src="https://image.tmdb.org/t/p/w500${data.posterPath}" alt="movie image" class="movie-image"/>
    `;

    const details = `
      <article>
        <p class="heading heading__small--dark">${data.title}</p>
        <p class="text genres">${data.genres
          .map((genre) => genre.name)
          .join(", ")}</p>
        <p class="text">${new Date(data.releaseDate)
          .getFullYear()
          .toString()}</p>
        <p class="text description">${data.description}</p>
      </article>

      <figure class="icons">
        <img src=${Icons} alt="icons" class="icons"/>
      </figure>
    `;

    return { image, details };
  }

  getShowDetails(showId: string): FilmSummary {
    const results = this.fetchShowById(showId);
    console.log("show", results);

    const { image: placeholderImage, details: placeholderDetails } =
      this.generatePlaceHolderSummary();

    const image = document.createElement("figure");
    image.classList.add("modal__content--image");

    // set image to placeholder image
    image.innerHTML = placeholderImage.innerHTML;

    const details = document.createElement("div");
    details.classList.add("modal__content--details");
    details.innerHTML = placeholderDetails.innerHTML;

    results.then((data) => {
      const args = {
        posterPath: data.poster_path,
        title: data.name,
        genres: data.genres,
        releaseDate: data.first_air_date,
        description: data.overview,
      };
      const summary = this.generateSummary(args);

      image.innerHTML = summary.image;
      details.innerHTML = summary.details;
    });

    return { image, details };
  }

  showDetailsModal(movieId: string, type: string) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const modalContent = document.createElement("article");
    modalContent.classList.add("modal__content");

    const { image, details } = (() => {
      switch (type) {
        case "movie":
          return this.getMovieDetails(movieId);
        case "tv":
          return this.getShowDetails(movieId);
        default:
          return this.getMovieDetails(movieId);
      }
    })();

    modalContent.append(image, details);

    // close modal and allow scrolling
    const closeModal = function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";

      //remove modal from dom
      modal.remove();
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        closeModal();
      }
    };

    window.addEventListener("touchend", function (event) {
      if (event.target == modal) {
        event.preventDefault();
        event.stopPropagation();
        closeModal();
      }
    });

    modal.append(modalContent);

    //add modal to body
    this.container.append(modal);
  }

  generateMovieGrid(movies: any[], type: string) {
    const movieGrid = document.createElement("div");
    movieGrid.classList.add("movie-grid");

    movies.forEach((movie) => {
      const movieImage = document.createElement("img");
      movieImage.classList.add("movie-image");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      movieImage.addEventListener("click", () => {
        this.showDetailsModal(movie.id, type);
      });

      movieGrid.append(movieImage);
    });

    return movieGrid;
  }

  generateMoviesContent() {}
}
