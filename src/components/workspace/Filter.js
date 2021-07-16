import React, { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import searchIcon from "../assets/img/search-icon.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {
  const [isShow, setIshow] = useState(true);
  const {
    setSearchNameVal,
    setSearchGoalVal,
    filterStDate,
    filterEndDate,
    setFilterStDate,
    setFilterEndDate,
  } = useContext(ItemContext);
  const handleChangeGoal = ({ target }) => {
    setSearchGoalVal(target.value);
  };
  const handleSearch = ({ target }) => {
    setSearchNameVal(target.value);
  };
  const handleStartDate = (date) => {
    console.log(date);
    setFilterStDate(date);
  };
  const handleEndDate = (date) => {
    setFilterEndDate(date);
  };

  return (
    <div className="filter wrap border rounded">
      <div className="header d-flex">
        <h6>Filter</h6>
        <h6
          className="collapse__text pointer"
          onClick={() => setIshow(!isShow)}
        >
          Collapse
        </h6>
      </div>

      {isShow && (
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
              className="form-select"
              id="goals"
              onChange={handleChangeGoal}
            >
              <option defaultValue="---">Goal State</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text h-100">Start</div>
              </div>
                           <DatePicker
selected={filterStDate}
className="form-control start input__datepicker"
onChange={handleStartDate}
maxDate={new Date()}
placeholderText="Select a date"
showMonthDropdown
showYearDropdown
dropdownMode="select"
/>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text h-100">Ends</div>
              </div>
              <DatePicker
selected={filterEndDate}
className="form-control start input__datepicker"
onChange={handleEndDate}
maxDate={new Date()}
placeholderText="Select a date"
showMonthDropdown
showYearDropdown
dropdownMode="select"
/>
            </div>
          </div>
        </div>
      )}  </div>
  );
};

export default Filter;



