import { useRef } from "react";
import { GiRelationshipBounds } from "react-icons/gi";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";
import classes from "./IngredientEntry.module.css";

const apiKeyAndLink =
  "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=TqnHxl4qxraN1iIDy4fNLPLlgeCXBgEc8trqt3kg";

const IngredientEntry = (props) => {
  const entryRef = useRef();

  const tally = async (event) => {
    event.preventDefault();
    // let fullPastedVersion = entryRef.current.value;
    // let fullList = fullPastedVersion.split("\n");

    // let exceptions = ['pound', 'pounds', 'cup', 'cups', 'tablespoon', 'tablespoons']

    // const ruledOut = (word) => {
    //     return exceptions.includes(word)
    // }

    // for (let ingredientLine of fullList) {
    //   let listOfWords = ingredientLine.split(" ");

    //   for (let word of listOfWords) {
    //     if (isNaN(word) && !ruledOut(word) ) {
    //       let response = await fetch(apiKeyAndLink, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ query: word }),
    //       });

    //       if (response.ok) {
    //         let reply = await response.json();

    //         if (reply.foods.length > 30) {
    //           console.log(word);
    //         }
    //       }
    //     }
    //   }
    // }

    let response = await fetch(apiKeyAndLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"query": "Cheddar cheese", "dataType": ["Branded"], "sortBy": "fdcId", "sortOrder": "desc"}),
    });

    if (response.ok) {
      console.log(response.json());
    }
  };
  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <textarea rows={15} cols={100} ref={entryRef}></textarea>
          <div className={classes.submitDiv}>
            <button onClick={tally}>Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default IngredientEntry;
