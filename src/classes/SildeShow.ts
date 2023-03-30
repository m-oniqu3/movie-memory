import { Film } from "../utils/movies";

export class SlideShow {
  swiperWrapper: HTMLElement;
  film: Film[];

  constructor(element: HTMLElement, film: Film[]) {
    this.swiperWrapper = element;
    this.film = film;
  }

  public generateSlideShow() {
    this.swiperWrapper.innerHTML = this.film
      .map((film) => {
        return `
          <div class="swiper-slide">
            <img src="${film.src}" alt="film" />

            <div class="overlay"></div>

            <article class="movie-container">
              <div class="container">
                <h3 class="heading heading__medium">${film.title}</h3>
                <p class="text">${film.desc}</p>
                <div class="genres">${film.genre.map((genre: string) => {
                  return `<p class="genre">${genre}</p>`;
                })}</div>
                </div>
              </article>
          </div> `;
      })
      .join("");
  }
}
