const headerNav = `
<nav class="header-container">
  <div class="left"> 
    <a class="nav-section" href="./index.html">
        <img class="logo" src="images/logo.png" alt="logo">
        <h1 class="coffee-title">THREE PINES COFFEE</h1>
    </a>
    <div class="main-links">
      <button class="dropbtn">
        <a class="main-nav-link" href="./menu.html">Menu</a>
      </button>
      <div class="dropdown">
        <button class="dropbtn">
          <a class="main-nav-link" href="./community.html">Community</a>
        </button>
        <div class="dropdown-content">
          <a class="main-nav-link" href="./events.html">Events</a>
          <a class="main-nav-link" href="./newsblog.html">News/Blog</a>
          <a class="main-nav-link" href="./press.html">Press</a>
        </div>
      </div>
      <button class="dropbtn">
        <a class="main-nav-link" href="./about.html">About Us</a>
      </button>
    </div>
  </div>
  <!-- </a> -->
  <div class="right">
    <a class="account-link main-nav-link" href="./account.html">
      <i class="fa-solid fa-circle-user fa-2x account-icon"></i>
      <!--  <img class="account-icon" src="/images/account_icon.png"> -->
      <span class="account-text">Account</span>
    </a>
  </div>
</nav>
`;

const headerEl = document.getElementById("nav-target");
headerEl.innerHTML += headerNav;

const footerFill = `
<div class="upper">
  <section class="info-section">
    <div class="info">
      <h3>Address</h3>
      <p class="info-p">165 S. Main St.</p>
      <p class="info-p">Salt Lake City</p>
      <p class="info-p">UT, 84111</p>
    </div>
    <div class="info">
      <h3>Hours:</h3>
      <p class="info-p hours"><span class="times first-times">Mon - Fri:</span><span class="times">7AM - 5PM</span>
      </p>
      <p class="info-p hours"><span class="times">Sat - Sun:</span><span class="times">8AM-5PM</span></p>
    </div>
    <div class="info">
      <a class="footer-link" href="./policy.html">Policy</a>
      <a class="footer-link" href="./terms.html">Terms of Service</a>
      <a class="footer-link" href="./careers.html">Careers</a>
      <a class="footer-link" href="./contact.html">Contact</a>
    </div>
  </section>
  <section class="info-section">
    <a class="footer-link social-link" href="https://www.facebook.com/threepinescoffee/" target="blank">
      <i class="fa-brands fa-facebook-square fa-3x"></i>
    </a>
    <a class="footer-link social-link" href="https://www.instagram.com/threepinescoffee/?hl=en" target="blank">
      <i class="fa-brands fa-instagram-square fa-3x"></i>
    </a>
    <a class="footer-link social-link" href="https://twitter.com/3pinescoffee" target="blank">
      <i class="fa-brands fa-twitter-square fa-3x"></i>
    </a>
  </section>
</div>
<div class="lower">
  <p class="copyright-content">Copyright &copy;2022</p>
</div>
`;

const footerEl = document.getElementById("foot-target");
footerEl.innerHTML += footerFill;
