import React, { createContext, useEffect, useMemo, useState } from "react";
import { getData } from "../utils/db";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItem] = useState([]);
  const [searchNameVal, setSearchNameVal] = useState("");
  const [searchGoalVal, setSearchGoalVal] = useState("");

  const fetchData = async () => {
    return setItem(getData());
  };

  const filterName = (items, val) => {
    return val === ""
      ? items
      : items.filter((data) => {
          let { name, species, breeds } = data;
          return (
            name.toLowerCase().includes(val.toLowerCase()) ||
            species.toLowerCase().includes(val.toLowerCase()) ||
            breeds.primary.toLowerCase().includes(val.toLowerCase())
          );
        });
  };
  const filterGoal = (items, val) => {
    return val === "Male"
      ? items.filter((item) => item.gender === "Male")
      : val === "Female"
      ? items.filter((item) => item.gender === "Female")
      : items;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(items);
  let displayItems = useMemo(() => {
    let filteredByName = filterName(items, searchNameVal);
    return filterGoal(filteredByName, searchGoalVal);
  }, [items, searchNameVal, searchGoalVal]);
  return (
    <ItemContext.Provider
      value={{
        item: displayItems,
        filterGoal,
        setSearchNameVal,
        setSearchGoalVal,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
