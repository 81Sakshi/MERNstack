import React from 'react';
import s5 from './images/s5.jpg'
import s9 from './images/s9.png'
import s10 from './images/s10.jpg'
import s6 from './images/s6.jpg'



function Component2() {
  return (
    <div style={{ backgroundColor: 'silver' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/ll1.jpg" // Ensure this image is in the public/images directory
              alt="Logo"
              height="70px"
              width="200px"
            />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movie Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sci-Fi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s9}
             
              className="d-block w-100"
              alt="Image 1"
              height="350px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={s5}
              className="d-block w-100"
              alt="Image 2"
              height="350px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={s10}
              className="d-block w-100"
              alt="Image 3"
              height="350px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      {/* Offer Banner */}
      <div
        className="offer-banner text-center"
        style={{ backgroundColor: '#000000', color: 'white', padding: '10px' }}
      >
        <h3>🔥 Limited Time Offer: Get 20% OFF on All Marvel Movies! Use Code: MARVEL20</h3>
      </div>
      <br />

      {/* Movie Cards */}
      <div className="container text-center">
        <div className="row">
          {/* Sample Movie Card */}
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={s6}
                className="card-img-top"
                alt="Movie"
                height="300px"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                    color: 'rgb(88, 17, 41)',
                    fontSize: '18pt',
                  }}
                >
                  AVENGERS ENDGAME
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '20pt',
                    fontStyle: 'italic',
                    fontFamily:
                      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    backgroundColor: 'rgb(237, 235, 233)',
                  }}
                >
                  $32
                </p>
                <div
                  className="rating"
                  style={{ color: 'silver', fontSize: '1.2rem' }}
                >
                  ★★★★☆ (4.5)
                </div>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <a href="#home">Home</a> | <a href="#about">About Us</a> |{' '}
          <a href="#contact">Contact</a>
        </div>
        <p>© 2025 MarvelMovie Sale. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Component2;
