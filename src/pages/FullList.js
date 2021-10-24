import { useEffect, useState } from "react";

import GetAList from "../components/helperFunctions/GetAList";

import classes from "./FullList.module.css";

const FullList = () => {
  const [listOfIngredients, setListOfIngredients] = useState([]);

  useEffect(() => {
    const getAllIngredients = async () => {
      const allIngredients = await GetAList("get-all-ingredients");
      setListOfIngredients(allIngredients);
    };

    getAllIngredients();
  }, []);
};

export default FullList;
