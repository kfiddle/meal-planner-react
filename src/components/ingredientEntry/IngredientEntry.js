import { useRef } from "react";

import Modal from "../UI/modal/Modal";
import classes from "./IngredientEntry.module.css";

const IngredientEntry = (props) => {
  const entryRef = useRef();

  const tally = (event) => {
    event.preventDefault();
    console.log(entryRef.current.value);
  };
  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <textarea rows={5} cols={100} ref={entryRef}></textarea>
          <div className={classes.submitDiv}>
            <button onClick={tally}>Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default IngredientEntry;
