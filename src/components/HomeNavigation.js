import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./HomeNavigation.module.css";

const HomeNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
      <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >   products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeNavigation;
