export class Movies {
  container: HTMLElement;
  apiKey: any;
  openModal: boolean;

  constructor(container: HTMLElement) {
    this.container = container;
    this.apiKey = import.meta.env.VITE_API_KEY;
    this.openModal = false;
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

  showMovieDetailsModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const modalContent = document.createElement("article");
    modalContent.classList.add("modal__content");

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
        this.showMovieDetailsModal();
        // this.fetchMovieById(movie.id);
      });

      movieGrid.append(movieImage);
    });

    return movieGrid;
  }

  generateMoviesContent() {}
}
