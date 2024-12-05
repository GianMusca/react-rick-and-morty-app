import React from "react";

import "./Navigation.css"

import list from "../../assets/list.svg"

export default function Navigation() {
  return (
    <nav className="r-m-navbar navbar navbar-expand-lg container-fluid">
      <div className="container-fluid">
        <a href="\" className="navbar-brand">
          <h1>Rick & Morty</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <img src={list} alt="Navbar-Icon" className="nb-icon"/>
        </button>
        <div class="collapse navbar-collapse justify-content-lg-end p-4" id="navbarNav">
          <ul class="navbar-nav align-items-center gap-2">
            <li class="nav-item">
              <a class="nav-link r-m-pill" href="#">
                Characters
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link r-m-pill" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
