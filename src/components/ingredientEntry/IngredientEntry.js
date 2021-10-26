import { useRef, useState } from "react";
import { GiRelationshipBounds } from "react-icons/gi";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";
import classes from "./IngredientEntry.module.css";

const apiKeyAndLink =
  "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=TqnHxl4qxraN1iIDy4fNLPLlgeCXBgEc8trqt3kg";

const IngredientEntry = (props) => {
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [editedVersion, setEditedVersion] = useState([]);
  const entryRef = useRef();

  const edit = () => {
    const convertFraction = (fractionString) => {
      return +(fractionString[0] / fractionString[2]);
    };

    let fullPastedVersion = entryRef.current.value;
    let fullList = fullPastedVersion.split("\n");

    let exceptions = [
      "pound",
      "pounds",
      "cup",
      "cups",
      "tablespoon",
      "tablespoons",
    ];

    const ruledOut = (word) => {
      return exceptions.includes(word);
    };

    for (let ingredientLine of fullList) {
      let editedLine = [];
      let listOfWords = ingredientLine.split(" ");

      for (let word of listOfWords) {
        if (!ruledOut(word)) {
          editedLine.push(word);
        }
      }

      if (isNaN(editedLine[0]) && editedLine[0].length === 3) {
        editedLine[0] = convertFraction(editedLine[0]);
      }

      setEditedVersion([...editedLine]);

      console.log(editedLine);
    }

    setEditButtonClicked(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    console.log("submitting");
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={`${classes.outerContainer} ${classes.control}`}>
        <form>
          {!editButtonClicked && (
            <textarea rows={15} cols={100} ref={entryRef}></textarea>
          )}
          {editButtonClicked && (
            <textarea
              rows={15}
              cols={100}
              value={editedVersion}
              readOnly={true}
            ></textarea>
          )}

          <div className={classes.buttonDiv}>
            <button
              onClick={edit}
              className={classes.editButton}
              type={"button"}
            >
              Edit
            </button>
          </div>

          <div className={classes.buttonDiv}>
            <button onClick={submit} className={classes.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default IngredientEntry;
