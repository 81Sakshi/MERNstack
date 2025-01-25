import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


import logo from "../images/ll1.jpg"
import img1 from "../images/s9.png"
import img2 from "../images/s5.jpg"
import img3 from "../images/s10.jpg"
import card1 from "../images/s16.jpg" 
import card2 from "../images/s14.jpg"
import card3 from "../images/s13.jpg"
import img4 from "../images/s12.jpg"
import img5 from "../images/s15.jpg"
import img6 from "../images/s6.jpg"


function Component2() {
  return (
    <div style={{ backgroundColor: "silver" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" height="70px" width="200px" />
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

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide carousel-fade mt-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Image 1" height="350px" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Image 2" height="350px" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Image 3" height="350px" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          
        </button>
      </div>
      <h3 >🔥 Limited Time Offer: Get 20% OFF on All Marvel Movies! Use Code: MARVEL20</h3>
      
      {/* Cards */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card1} className="card-img-top" alt="Card 1" height="300px" />
              <div className="card-body">
                <h5 className= "card-title">Avengers Endgame</h5>
                <p className="card-title">$32</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card2} className="card-img-top" alt="Card 2" height="300px" />
              <div className="card-body">
                <h5 className="card-title">Captain Marvel</h5>
                <p className="card-title">$28</p>
                <a href="#" className="btn btn-primary" s>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card3} className="card-img-top" alt="Card 3" height="300px" />
              <div className="card-body">
                <h5 className="card-title">Black Panther</h5>
                <p className="card-title">$30</p>
                
                <a href="#" className="btn btn-primary ">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={img4} className="card-img-top" alt="Card 1" height="300px" />
              <div className="card-body">
                <h5 className= "card-title">Thor</h5>
                <p className="card-title">$35</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={img5} className="card-img-top" alt="Card 2" height="300px" />
              <div className="card-body">
                <h5 className="card-title">Doctor strange</h5>
                <p className="card-title">$40</p>
                <a href="#" className="btn btn-primary" s>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={img6} className="card-img-top" alt="Card 3" height="300px" />
              <div className="card-body">
                <h5 className="card-title">Captain Marvel</h5>
                <p className="card-title">$30</p>
                
                <a href="#" className="btn btn-primary ">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3">
    
    <p>Email: <a href="mailto:support@mavermoviesale.com">support@marvelrmoviesale.com</a> | Phone: +1-800-555-MAVER</p>
    <p>Secure Payment Options: Visa | Mastercard | PayPal</p>
    <p>© 2025 MaevelMovie Sale. All Rights Reserved.</p>
  </footer>

    </div>
  );
}

export default Component2
