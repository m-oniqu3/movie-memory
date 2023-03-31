import GithubIcon from "../assets/github-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";

export class Footer {
  footer: HTMLElement;
  constructor(element: HTMLElement) {
    this.footer = element;
  }

  public generateFooter() {
    this.footer.innerHTML = `
                <ul>
                    <li><a href="browse.html">Home</a></li>
                    <li><a href="#">Memories</a></li>
                    <li><a href="tvshows.html">Tv Shows</a></li>
                    <li><a href="movies.html">Movies</a></li>
                </ul>

                <p class="text"> 
                    Designed and Developed by Monique
                </p>

                <div class="icons">
                    <a href="https://github.com/m-oniqu3">
                    <figure>
                        <img src=${GithubIcon} alt="github link to m-oniqu3">
                    </figure>
                    </a>
                    
                    <a href="https://twitter.com/ctrlaltmonique">
                    <figure>
                        <img src=${TwitterIcon} alt="twitter link to ctrlaltmonique">
                    </figure>
                    </a>
                </div>
        `;
  }
}
