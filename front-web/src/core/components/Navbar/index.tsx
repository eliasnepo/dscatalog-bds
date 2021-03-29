import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAccessTokenDecoded, logout } from "core/utils/auth";
import "./styles.scss";

import menu from "../../assets/images/menu.svg";

const Navbar = () => {
  const [drawerActive, setDrawerActive] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  const handleLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    logout();
  };

  return (
    <nav className="bg-primary main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>DS Catalog</h4>
      </Link>
      <button
        type="button"
        onClick={() => setDrawerActive(!drawerActive)}
        className="menu-mobile-btn"
      >
        <img src={menu} alt="mobile menu icon" />
      </button>

      <div
        className={drawerActive ? "menu-mobile-container" : "menu-container"}
      >
        <ul className="main-menu">
          <li>
            <NavLink
              to="/"
              onClick={() => setDrawerActive(false)}
              exact
              className="nav-link"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={() => setDrawerActive(false)}
              className="nav-link"
            >
              CATÁLOGO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              onClick={() => setDrawerActive(false)}
              className="nav-link"
            >
              ADMIN
            </NavLink>
          </li>
          {drawerActive && (
            <li>
              {currentUser && (
                <a
                  href="#logout"
                  className="nav-link active d-inline"
                  onClick={(e) => {
                    setDrawerActive(false);
                    handleLogout(e);
                  }}
                >
                  {`LOGOUT - ${currentUser}`}
                </a>
              )}
            </li>
          )}
          {drawerActive && (
            <>
              {!currentUser && (
                <li>
                  <Link
                    to="/auth/login"
                    onClick={() => setDrawerActive(false)}
                    className="nav-link active"
                  >
                    LOGIN
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
      <div className="user-info-dnone text-right">
        {currentUser && (
          <>
            {currentUser}
            <a
              href="#logout"
              className="nav-link active d-inline"
              onClick={handleLogout}
            >
              LOGOUT
            </a>
          </>
        )}
        {!currentUser && (
          <Link to="/auth/login" className="nav-link active">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
