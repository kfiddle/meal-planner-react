import { useState } from "react";

import { GiCook, GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import IngredientEntry from "../ingredientEntry/IngredientEntry";

import classes from "./SideBar.module.css";
const SideBar = (props) => {
  const [entryModalClicked, setEntryModalClicked] = useState(false);

  const { id, name } = props.user;

  const entryModalHandler = (open) => {
    open? setEntryModalClicked(true): setEntryModalClicked(false)
  };


  return (
    <Fragment>
      <div className={classes.sideBar}>
        <nav>
          <div className={classes.options}>
            <ul>
              <li className={classes.navItem}>
                <GiCook className={classes.icon} onClick={()=> { entryModalHandler(true)}} />
              </li>

              <li className={classes.navItem}>
                <NavLink to={"/full-list"} activeClassName={classes.active}>
                  <GiShoppingCart className={classes.icon} />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {entryModalClicked && <IngredientEntry closeModal={()=> entryModalHandler(false)} />}
    </Fragment>
  );
};

export default SideBar;
