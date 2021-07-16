import React, { createContext, useEffect, useMemo, useState } from "react";
import { getData } from "../utils/db";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItem] = useState([]);
  const [searchNameVal, setSearchNameVal] = useState("");
  const [searchGoalVal, setSearchGoalVal] = useState("");
  const [filterStDate, setFilterStDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");

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
  const handleDate = (startDate, endDate, item) => {
    console.log('cont', startDate, endDate)
    if(!startDate && !endDate){
      return item
    }
    let sd = new Date(startDate).getTime();
    let ed = new Date(endDate).getTime();
    if(startDate && !endDate){
      ed = new Date().getTime()
    }
    const result = item.filter((d) => {
      const time = new Date(d.published_at).getTime();
      return sd < time && time < ed;
    });
    return result
  };


  useEffect(() => {
    fetchData();
  }, []);

  let displayItems = useMemo(() => {
    let filteredByName = filterName(items, searchNameVal);
   let dateFilterData =  handleDate(filterStDate, filterEndDate, filteredByName)
    return filterGoal(dateFilterData, searchGoalVal);
  }, [items, searchNameVal, searchGoalVal, filterStDate, filterEndDate ]);

  console.log("display", displayItems)
  return (
    <ItemContext.Provider
      value={{
        item: displayItems || [],
        filterGoal,
        setSearchNameVal,
        setSearchGoalVal,
        filterStDate,
        setFilterStDate,
        setFilterEndDate,
        filterEndDate,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
