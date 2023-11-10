 import React from "react";
import "./Navbar.css"
import logo from "../images/logo.PNG"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow">
        <div className="container-fluid">
          <a classNameName="navbar-brand ms-5">
            <img alt="logo" src={logo} height="45px"/>
          </a>
          <form className="d-flex" role="search">
            <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search"/>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>         
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
