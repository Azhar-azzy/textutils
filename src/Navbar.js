import React from "react";
import PropTypes from "prop-types";

function Navbar({ title, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <a className="navbar-brand" href="/">
        {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
        <div
          className={`custom-control text-${
            mode === "light" ? "dark" : "light"
          } custom-switch`}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={toggleMode}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Azhar",
};
export default Navbar;
