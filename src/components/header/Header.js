import { useState } from "react";
import { GiCook, GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import SideBar from "../sideBar/SideBar";

import classes from "./Header.module.css";

const usersList = [
  { name: "Mrrria", active: false },
  { name: "ZanyGold", active: false },
  { name: "YerMom", active: false },
];

const Header = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [clickedUsers, setClickedUsers] = useState(usersList);

  const openSideBar = (name) => {
    setSideBarOpen(true);

    let tempList = [...clickedUsers];
    for (let user of tempList) {
      user.active = false;
      if (user.name === name) {
        user.active = true;
      }
    }
    setClickedUsers(tempList);
  };

  const displayedUsers = usersList.map((user) => (
    <li
      key={Math.random()}
      onClick={() => {
        openSideBar(user.name);
      }}
      className={!user.active ? classes.navItem : classes.active}
    >
      {user.name}
    </li>
  ));

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>Ingredients Lister</h1>
        </div>

        <nav className={classes.nav}>
          <ul>{displayedUsers}</ul>
        </nav>
      </header>
      {sideBarOpen && <SideBar />}
    </Fragment>
  );
};

export default Header;
