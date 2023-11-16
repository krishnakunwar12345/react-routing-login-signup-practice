import React from "react";
import "./Navbar.css"
import logo from "../images/logo.PNG"
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid">
          <NavLink classNameName="navbar-brand ms-5" to="/">
            <img alt="logo" src={logo} height="45px"/>
          </NavLink>
          <form className="d-flex me-5" role="search">
            <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search"/>
            <a class="nav-link text-dark fs-5 searchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a class="nav-link text-dark fs-5 mt-1 ms-4" href="#"><i class="fa-solid fa-house"></i></a>
            <a class="nav-link text-dark fs-5 mt-1 ms-4" href="#"><i class="fa-regular fa-heart"></i></a>
            <NavLink class="nav-link text-dark fs-5 mt-1 ms-4" to="/myprofile"><i class="fa-solid fa-circle"></i></NavLink>         
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
