// Navbar Header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      <div class="container-fluid px-3 bg-white">
        <a class="navbar-brand" href="/index.html">
          <img class="rounded w-25" src="/frontend/assets/images/logo.png" alt="" />
        </a>

        <button
          class="navbar-toggler p-1 ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/health-news.html"
                >HealthNews</a
              >
            </li>
            <li class="nav-item f-inter d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/wellness.html"
                >Wellness</a
              >
            </li>
            <li class="nav-item f-inter d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/nutrition.html"
                >Nutrition</a
              >
            </li>
            <li class="nav-item f-inter d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/public-health.html"
                >PublicHealth</a
              >
            </li>
            <li class="nav-item f-inter d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/health-tips.html"
                >Health Tips</a
              >
            </li>
            <li class="nav-item f-inter d-flex align-items-center">
              <a
                class="nav-link f-inter"
                href="/frontend/category/about-us.html"
                >About us</a
              >
            </li>
          </ul>
        </div>
        <form class="d-none d-lg-flex ms-auto" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search News"
          />
          <button class="btn btn-outline-primary-1" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>`;
  }
}

customElements.define("my-header", myHeader);

//Active Navlinks
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-p");
  }
});

//Footer
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="text-white bg-primary-1">
      <div class="container d-flex">
        <div class="d-flex flex-column align-items-start me-auto">
          <div>
            <img src="/frontend/assets/images/logo.png" alt="" />
          </div>
          <p class="text-white w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p class="text-white">Follow us</p>
          <div class="d-flex gap-4 mb-3">
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span><i class="fa-brands fa-whatsapp"></i></span>
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-x-twitter"></i></span>
          </div>
          <p class="text-white w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("my-footer", myFooter);
