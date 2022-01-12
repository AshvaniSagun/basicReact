import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <li className="nav-item nav-link active" href="#"> <Link to="/">Home</Link><span className="sr-only">(current)</span></li>
          <li className="nav-item nav-link" href="#">  <Link to="getApi">Get Request</Link></li>
          <li className="nav-item nav-link" href="#">Pricing</li>
          <li className="nav-item nav-link disabled" href="#">Disabled</li>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
