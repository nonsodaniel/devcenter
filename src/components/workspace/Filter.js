import React from 'react'
import searchIcon from "../assets/img/search-icon.png";


const Filter = () => {
    return (
        <div className="filter wrap border rounded">
        <div className="header d-flex">
          <h6>Filter</h6>
          <h6 className="collapse__text">Collapse</h6>
        </div>
        <div className="details border-top rounded">
          <div class="form-group search item mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Search by people, group or manager"
            />
            <img
              src={searchIcon}
              className="search__icon"
              alt="search__icon"
            />
          </div>
          <div className="item dates">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Goal State</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div className="input-group">
              <div class="input-group-prepend">
                 <div class="input-group-text h-100">Start</div>
              </div>
              <input
              type="date"
              class="form-control start"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
            </div>
            <div className="input-group">
              <div class="input-group-prepend">
                 <div class="input-group-text h-100">Ends</div>
              </div>
              <input
              type="date"
              class="form-control start"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
            </div>

          </div>
        </div>
      </div>
     
    )
}

export default Filter
