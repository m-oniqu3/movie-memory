import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import EmptyImage from "./../assets/undraw_home_cinema_l7yl.svg";
import ErrorImage from "./../assets/undraw_movie_night_re_9umk.svg";
import { Movies } from "./Movies";

type Content = {
  heading: string;
  content_type: string;
  page: string;
};

export class Memories extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  renderContent(data: any, placeholder: HTMLElement, media_type: string) {
    let article = document.createElement("article");
    this.container.innerHTML = "";

    if (data.length === 0 || data === undefined) {
      this.clearPlaceholderElement(placeholder);

      if (media_type === "tv") {
        this.renderEmptyContent({
          heading: "No TV Memories",
          content_type: "TV Shows",
          page: "/tvshows.html",
        });
      } else {
        this.renderEmptyContent({
          heading: "No Movie Memories",
          content_type: "movies",
          page: "/movies.html",
        });
      }
    } else {
      const memoriesGrid = this.generateMovieGrid(data, media_type);

      article.innerHTML = "";
      this.container.innerHTML = "";
      article.append(memoriesGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  renderEmptyContent(content: Content) {
    let article = document.createElement("article");

    article.innerHTML = `
      <div class="movies__error">
        <figure>
          <img src="${EmptyImage}" alt="no ${content.content_type}" class="movies__error--image">
        </figure>

        <h1 class="heading heading__small--white">${content.heading}</h1>
        <p class="text">You have no ${content.content_type} in your memories. 
          Visit the ${content.content_type} page to start adding some.
        </p>

        <a href="${content.page}" class="button button__primary">Go There</a>
      </div>

    `;
    this.container.append(article);
  }

  renderErrorContent(media_type: string) {
    const article = document.createElement("article");
    const heading = media_type === "tv" ? "TV Memories" : "Movie Memories";

    article.innerHTML = `
      <div class="movies__error">
        <figure>
          <img src="${ErrorImage}" alt="Error loading upcoming movies" class="movies__error--image">
        </figure>

        <h1 class="heading heading__small--white">Error Loading ${heading}</h1>
        <p class="text">There was an error fetching the data. Refresh and try again.</p>
      </div> `;

    this.container.append(article);
  }

  async getTvShowMemories() {
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user.uid) {
        window.location.href = "/account.html";
        return;
      }

      // get the data from firestore
      const tvshowsRef = doc(db, "tvshows", user.uid);

      onSnapshot(tvshowsRef, (doc) => {
        const tvshows = doc.exists() ? doc.data().memories.reverse() : [];
        this.renderContent(tvshows, placeholder, "tv");
      });
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent("tv");
      console.log(error);
    }
  }

  async getMovieMemories() {
    const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!user.uid) {
        window.location.href = "/account.html";
        return;
      }

      // get the data from firestore
      const moviesRef = doc(db, "movies", user.uid);

      onSnapshot(moviesRef, (doc) => {
        const movies = doc.exists() ? doc.data().memories.reverse() : [];
        this.renderContent(movies, placeholder, "movie");
      });
    } catch (error) {
      this.clearPlaceholderElement(placeholder);
      this.renderErrorContent("movie");

      console.log(error);
    }
  }

  async getDataForCurrentPage(hash: string) {
    if (hash === "#tvshows") {
      this.getTvShowMemories();
    } else if (hash === "#movies") {
      this.getMovieMemories();
    }
  }

  getUserData() {
    if (window.location.hash) {
      const hash = window.location.hash;
      this.getDataForCurrentPage(hash);
    } else {
      window.location.hash = "#tvshows";
    }

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash;
      this.getDataForCurrentPage(hash);
    });
  }

  generateContent() {
    this.getUserData();
  }
}
