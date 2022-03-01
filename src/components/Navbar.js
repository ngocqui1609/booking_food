import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  //console.log("navbar rendered");
  return (
    <>
      <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
        <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">
          <Link to="/" className="navbar-brand">
            <img
              id="nav-logo"
              src="https://b.zmtcdn.com/data/pictures/9/19862289/67ff237e5fc7cf24e3f56a5159cf9ca8.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt="nav-logo"
              className="img-fluid d-inline-block align-baseline me-2"
            />
            <span className="nav-title">Booking</span>
            <span className="nav-title-to">Food</span>
          </Link>
        </nav>
        <div className="d-inline-flex m-2 logincategory">
          <div className="">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-light btn-lg text-white loginbtn me-2"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="">
            <Link to="/register">
              <button type="button" className="btn btn-light btn-lg me-2">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Navbar);
