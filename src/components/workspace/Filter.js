import React, { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import searchIcon from "../assets/img/search-icon.png";

const Filter = () => {
  const { setSearchNameVal, setSearchGoalVal } = useContext(ItemContext);
  const handleChangeGoal = ({ target }) => {
    setSearchGoalVal(target.value);
  };
  const handleSearch = ({ target }) => {
    setSearchNameVal(target.value);
  };
  const handleDate = ({target}) => {
    console.log(target.value)
  };

  return (
    <div className="filter wrap border rounded">
      <div className="header d-flex">
        <h6>Filter</h6>
        <h6 className="collapse__text">Collapse</h6>
      </div>
      <div className="details border-top rounded">
        <div className="form-group search item mb-3">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search by people, group or manager"
            onChange={handleSearch}
          />
          <img src={searchIcon} className="search__icon" alt="search__icon" />
        </div>
        <div className="item dates">
          <select
            className="form-control"
            id="goals"
            onChange={handleChangeGoal}
          >
            <option value="">Goal State</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text h-100">Start</div>
            </div>
            <input
              type="date"
              className="form-control start"
              id="start_date"
              onChange={handleDate}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text h-100">Ends</div>
            </div>
            <input
              type="date"
              className="form-control start"
              id="dend_date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
