/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark shadow fixed-top navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <h3>App</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FaBars className="fs-3 text-white" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                <span className="text-white fw-bold navItem hover-underline-animation">
                  Inicio
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/list-appointment"
              >
                <span className="text-white fw-bold navItem hover-underline-animation">
                  Lista de Citas
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/create-appointment"
              >
                <span className="text-white fw-bold navItem hover-underline-animation">
                  Agendar Cita
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
