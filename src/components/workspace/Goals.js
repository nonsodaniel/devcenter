import React from "react";
import successIcon from "../assets/img/up-status.png";
import Chart from "./Chart";

const Goals = () => {
  const data = [
    {
      id: 1,
      status: "On Track",
      statusColor: "#1a9e68",
      statusDesc: "22.2% in the past 30 days",
      statusIcon: successIcon,
    },
    {
      id: 2,
      status: "Behind",
      statusColor: "#e6821d",
      statusDesc: "22.2% in the past 30 days",
      statusIcon: successIcon,
    },
    {
      id: 3,
      status: "At risk",
      statusColor: "#d52a2a",
      statusDesc: "22.2% in the past 30 days",
      statusIcon: successIcon,
    },
  ];
  return (
    <div className="goals wrap  border rounded">
      <div className="header d-flex">
        <h6>Goal Status</h6>
      </div>
      <div className="details border-top">
        <div className="row">
          <div className="col-md-6">
            <div className="chart-wrap ">
              <Chart />
            </div>
          </div>
          <div className="col-md-6 right-column">
            <div className="status chart-details">
              <div className="top">
                <h6 className="status__title">Status</h6>
                <p className="metrics">
                  Metrics as at <b>June 31st</b>
                </p>
              </div>
              <div className="contents border-top">
                {data.map((data__) => {
                  let { id, status, statusColor } = data__;
                  return (
                    <div className="content" key={id}>
                      <div className="status">
                        <div className="status-wrap">
                          <div
                            className="status__icon"
                            style={{ background: statusColor }}
                          ></div>
                          &#160; &#160;{" "}
                          <span className="status__text"> {status}</span>
                        </div>
                      </div>
                      <div className="right">
                        <div className="count-wrap">
                          <h3 className="m-0 count">
                            44 <span className="count__percent"> (7%)</span>
                          </h3>
                          <p className="count__desc">
                            {" "}
                            <img src={successIcon} alt="" height="10" /> 22.2%
                            in the past 30days
                          </p>
                        </div>
                        <div className="view">View</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Goals;
