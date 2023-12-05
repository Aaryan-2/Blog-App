import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=Tips">
            <h6>Travel Tips</h6>
          </Link>
          <Link className="link" to="/?cat=Travel">
            <h6>Budget Travel</h6>
          </Link>
          <Link className="link" to="/?cat=Stories">
            <h6>Travel Stories</h6>
          </Link>
          <Link className="link" to="/?cat=Technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=News">
            <h6>News</h6>
          </Link>
          <Link className="link" to="/?cat=Safety">
            <h6>Travel Safety</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
