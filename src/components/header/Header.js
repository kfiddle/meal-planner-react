import { useState } from "react";
import { GiCook, GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import SideBar from "../sideBar/SideBar";

import classes from "./Header.module.css";

const Header = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [clickedUser, setClickedUser] = useState(null);

  const openSideBar = (name) => {
    setSideBarOpen(true);
    setClickedUser(name);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>Ingredients Lister</h1>
        </div>

        <nav className={classes.nav}>
          <ul>
            <li
              className={classes.navItem}
              onClick={() => {
                openSideBar("Mrrria");
              }}
            >
              Mrrria
            </li>
            <li
              className={classes.navItem}
              onClick={() => {
                openSideBar("ZanyGold");
              }}
            >
              ZanyGold
            </li>
            <li
              className={classes.navItem}
              onClick={() => {
                openSideBar("YerMom");
              }}
            >
              YerMom
            </li>

        
          </ul>
        </nav>
      </header>
      {sideBarOpen && <SideBar/>}
    </Fragment>
  );
};

export default Header;
