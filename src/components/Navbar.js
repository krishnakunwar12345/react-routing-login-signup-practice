import React from "react";
import "./Navbar.css"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid">
          <a classNameName="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search"placeholder="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
