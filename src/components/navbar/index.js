import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  const selector = useSelector((state) => state.cart.cartItems);
const ini=0;
const sum = selector.reduce((initial, current) => initial + current.quantity,ini)

  // console.log(total)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NavBar
        </Link>
        {console.log(sum)}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clothes">
                Clothes
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <span
              style={{
                color: "white",
                paddingTop: "10px",
                paddingRight: "20px",
                fontSize: "24px",
              }}
              className="fas"
            >
              <span onClick={() => navigate("/checkout")}>&#xf07a;</span>
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>{sum}</span>
            </span>
            <button className="btn btn-outline-success" type="submit">
              LogIn
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
