export class Page {
  activePage: string;

  constructor() {
    this.activePage = "Home";
  }

  setActivePage(page: string) {
    this.activePage = page;
  }

  showContentForActivePage() {
    // const content = document.querySelector(".content") as HTMLElement;
    const contentInfo = document.querySelector(".content__info") as HTMLElement;

    contentInfo.innerText = this.activePage;
  }
}
