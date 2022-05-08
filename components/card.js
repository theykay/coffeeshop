

class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @use '../styles/main.scss' as styles;
      .card {
        width: 16rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: styles.$offwhite;
      }
      
      .card-img {
        width: 100%;
        height: auto;
        border-radius: .5rem;
        padding: 0;
        margin-bottom: .5rem;
      }
      
      .card-name {
        margin: 0;
        padding: 0;
      }
      
      .card-text {
        margin: 0;
        margin-top: .5rem;
        padding: 0;
      }
      
      .card-price {
        margin: 0.5rem 0 0 0;
      }
    </style>
    <section class="card">
      <img class="card-img" src="https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/3aede26a35804538bd7a1fe9b8522b4e.jpeg" alt="the bagel" />
      <h3 class="card-name">The Everything Bagel</h3>
      <p class="card-text">I got bored one day and put everything on a bagel</p>
      <h4 class="card-price">500 Bells</h4>
    </section>
    `;
  }
}

customElements.define("card", Card);
