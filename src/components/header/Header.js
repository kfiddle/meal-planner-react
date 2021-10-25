import { useState } from "react";
import { GiCook, GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import SideBar from "../sideBar/SideBar";

import classes from "./Header.module.css";

const usersList = [
  { id: 1, name: "Mrrria" },
  { id: 2, name: "ZanyGold" },
  { id: 3, name: "YerMom" },
];

const Header = (props) => {
  const [clickedUser, setClickedUser] = useState(null);

  const openSideBar = (id) => {
    setClickedUser(usersList[id - 1]);
  };

  const displayedUsers = usersList.map((user) => (
    <li
      key={user.id}
      onClick={() => {
        openSideBar(user.id);
      }}
      className={user === clickedUser ? classes.active : classes.navItem}
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
      {clickedUser && <SideBar user={clickedUser} />}
    </Fragment>
  );
};

export default Header;
