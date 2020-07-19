import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/about">
        Sarah Wist
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
