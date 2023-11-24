import React from "react";
import "./Navbar.css"
import logo from "../images/logo.PNG"
import {NavLink} from "react-router-dom"
import "./card.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-5" to="/">
            <img alt="logo" src={logo} height="45px"/>
          </NavLink>
          <form className="d-flex me-5" role="search">
            <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search"/>
            <a className="nav-link text-dark fs-5 mt-2 ms-4 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a className="nav-link text-dark fs-5 mt-2 ms-4" href="#"><i className="fa-solid fa-house"></i></a>
            <a className="nav-link text-dark fs-5 mt-2 ms-4" href="#"><i className="fa-regular fa-heart"></i></a>
            <div class="dropdown ms-3">
  <button class="btn" type="button" data-bs-toggle="dropdown">
  <img className="navbar-profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1504203640717-b7d237a3dc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhciUyMHdpdGglMjBib3l8ZW58MHx8MHx8fDA%3D"/>
  </button>
  <ul className="dropdown-menu">
    <li>
     <NavLink className="dropdown-item mt-0" to="/myprofile">My Profile</NavLink>
    </li>
    <li><a className="dropdown-item" href="#">
    Log Out
    </a></li>
  </ul>
</div>         
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
