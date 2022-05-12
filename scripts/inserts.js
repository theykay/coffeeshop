const headerNav = `
<nav class="header-container">
  <section class="nav-section">
    <img class="logo" src="images/logo.png" alt="logo">
    <h1 class="coffee-title">THREE PINES COFFEE</h1>
    <button class="dropbtn">
      <a class="main-nav-link" href="/menu.html">Menu</a>
    </button>
    <div class="dropdown">
      <button class="dropbtn">
        <a class="main-nav-link" href="/community.html">Community</a>
      </button>
      <div class="dropdown-content">
        <a class="main-nav-link" href="/events.html">Events</a>
        <a class="main-nav-link" href="/news-blog.html">News/Blog</a>
        <a class="main-nav-link" href="/press.html">Press</a>
      </div>
    </div>
    <button class="dropbtn">
      <a class="main-nav-link" href="/aboutus.html">About Us</a>
    </button>
  </section>
  <a class="account-link main-nav-link" href="/account.html">
    <img class="account-icon" src="/images/account_icon.png">
    Account
  </a>
</nav>
`;

const headerEl = document.getElementById('nav-target');
headerEl.innerHTML += headerNav;