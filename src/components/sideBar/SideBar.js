import { GiCook, GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import classes from "./SideBar.module.css";
const SideBar = (props) => {
  return (
    <div className={classes.sideBar}>
      <nav>
        <div className={classes.options}>
          <ul>
            <li className={classes.navItem}>
              <GiCook className={classes.icon} />
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
  );
};

export default SideBar;
