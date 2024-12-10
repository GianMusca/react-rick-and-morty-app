import React from "react";
import { Link } from "react-router";

import "./Navigation.css";

import list from "../../assets/list.svg";

export default function Navigation() {
  return (
    <nav className="r-m-navbar navbar navbar-expand-lg container-fluid">
      <div className="container-fluid">
        <a href="\" className="navbar-brand">
          <h1 className="r-m-h1">Rick & Morty</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={list} alt="Navbar-Icon" className="nb-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-end p-4"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item r-m-nav-item">
              <Link to={"/characters"} className="nav-link r-m-pill">
                Characters
              </Link>
            </li>
            <li class="nav-item r-m-nav-item">
            <Link to={"/contact"} className="nav-link r-m-pill">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
