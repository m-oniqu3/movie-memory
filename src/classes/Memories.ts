import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Movies } from "./Movies";

export class Memories extends Movies {
  constructor(container: HTMLElement) {
    super(container);
  }

  renderTvContent(data: any, placeholder: HTMLElement) {
    let article = document.createElement("article");
    let heading: HTMLHeadingElement;

    if (data.length === 0 || data === undefined) {
      heading = this.generateHeading("No Memories");

      article.innerHTML = "";
      article = heading;
      this.clearPlaceholderElement(placeholder);
    } else {
      const memoriesGrid = this.generateMovieGrid(data, "tv");

      article.innerHTML = "";
      this.container.innerHTML = "";
      article.append(memoriesGrid);
      this.clearPlaceholderElement(placeholder);
    }

    this.container.append(article);
  }

  async getTvShowMemories() {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const placeholder = this.populateLoadingPlaceholder("movies__placeholder");

      if (!user.uid) window.location.href = "/account.html";

      // get the data from firestore
      const tvshowsRef = doc(db, "tvshows", user.uid);

      onSnapshot(tvshowsRef, (doc) => {
        const tvshows = doc.exists() ? doc.data().memories.reverse() : [];
        this.renderTvContent(tvshows, placeholder);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getDataForCurrentPage(hash: string) {
    if (hash === "#tvshows") {
      this.getTvShowMemories();
    } else if (hash === "#movies") {
      console.log(hash);
      //  this.getMovieMemories();
    }
  }

  getUserData() {
    if (window.location.hash) {
      const hash = window.location.hash;
      this.getDataForCurrentPage(hash);
    } else {
      window.location.hash = "#tvshows";
    }
  }

  generateContent() {
    this.getUserData();
  }
}
