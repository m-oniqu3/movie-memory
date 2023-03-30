export class Footer {
  footer: HTMLElement;
  constructor(element: HTMLElement) {
    this.footer = element;
  }

  public generateFooter() {
    this.footer.innerHTML = `
        
            <div class="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Memories</a></li>
                    <li><a href="#">Tv Shows</a></li>
                    <li><a href="#">Movies</a></li>
                </ul>

                <p class="text"> 
                    Designed and Developed by Monique
                </p>
            </div>
       
        `;
  }
}
