import React, { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import searchIcon from "../assets/img/search-icon.png";

const Filter = () => {
  const [isShow, setIshow] = useState(true);
  const [startDt, setStartDt] = useState("");
  const [, setEndDt] = useState("");
  const { setSearchNameVal, setSearchGoalVal, item } = useContext(ItemContext);
  const handleChangeGoal = ({ target }) => {
    setSearchGoalVal(target.value);
  };
  const handleSearch = ({ target }) => {
    setSearchNameVal(target.value);
  };
  const handleStartDate = ({ target }) => {
    setStartDt(target.value);
    const sd = new Date(target.value).getTime();
    const ed = new Date().getTime();
    const result = item.filter((d) => {
      const time = new Date(d.published_at).getTime();
      return sd < time && time < ed;
    });
    console.log(result);
  };
  const handleEndDate = ({ target }) => {
    setEndDt(target.value);
    const sd = new Date(startDt).getTime();
    const ed = new Date(target.value).getTime();
    const result = item.filter((d) => {
      const time = new Date(d.published_at).getTime();
      return sd < time && time < ed;
    });
    console.log(result);
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
              <input
                type="date"
                className="form-control start"
                id="start_date"
                onChange={handleStartDate}
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text h-100">Ends</div>
              </div>
              <input
                type="date"
                className="form-control start"
                id="end_date"
                onChange={handleEndDate}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
