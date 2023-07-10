import React from "react";
import { NavLink } from "react-router-dom";
  let Navbar=()=> {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid" >
            <div className="row w-100">
            <div className="col-md-4 d-flex justify-content-between ">
            <NavLink className="navbar-brand" to="/">
            The Tragic Media
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            </div>
            <div className="col-md-8 collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/general">
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/science"
                  >Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/sports">
                    Sports
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/technology">
                    Technology
                  </NavLink>
                </li>
              </ul>
              </div>
            </div>
            </div>
          </div>
        </nav>
      </>
    );
  
}

export default Navbar;
