class Card extends HTMLElement {
  constructor(image, name, description, price) {
    super();
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
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
      <img class="card-img" src="${this.image}" alt="${this.name}" />
      <h3 class="card-name">${this.name}</h3>
      <p class="card-text">${this.description}</p>
      <h4 class="card-price">${this.price}</h4>
    </section>
    `;
  }
}

customElements.define("card", Card);
