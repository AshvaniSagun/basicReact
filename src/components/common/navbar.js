import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item nav-link active" href="#"> <Link to="/">{props.title}</Link><span className="sr-only"></span></li>
            <li className="nav-item nav-link" href="#"><Link to="editor">{props.otherNavs.link2}</Link></li>
            <li className="nav-item nav-link" href="#">  <Link to="getApi">{props.otherNavs.link1}</Link></li>
            <li className="nav-item nav-link" href="#">  <Link to="about">{props.otherNavs.link3}</Link></li>
            {/* <li className="nav-item nav-link disabled" href="#">{props.otherNavs.link3}</li> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

// PropTypes is an additional Type check in React.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  otherNavs: PropTypes.object.isRequired
}

Navbar.defaultProps = {
  title: 'No Title'
}
