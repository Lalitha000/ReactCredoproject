import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            ProBrand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active ps-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Customer service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ps-5 "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-5" href="#">
                  Gift Cards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-5" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-5" href="#">
                  Track my order
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <span class="material-icons ps-4">shopping_cart</span>
              <span className="material-icons ps-4">favorite_border</span>
              <span className="material-icons ps-4">account_circle</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
