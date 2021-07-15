import React, { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import ItemList from "./ItemList";
import "./items.scss";

const Items = () => {
  const { item } = useContext(ItemContext);
  return (
    <div className="items">
      {!item.length && <div className="text-center">No data available</div>}
      <div className="users">
        {item &&
          item.length > 0 &&
          item.map((animal) => {
            let { id } = animal;
            return <ItemList key={id} animal={animal} />;
          })}
      </div>
    </div>
  );
};

export default Items;
