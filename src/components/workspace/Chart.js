import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "April 30",
    uv: 20,
    zv: 80,
    pv: 40,
  },
  {
    name: "",
    uv: 20,
    zv: 80,
    pv: 40,
  },
  {
    name: "May 27",
    uv: 60,
    zv: 60,
    pv: 20,
  },
  {
    name: "",
    uv: 20,
    zv: 20,
    pv: 100,
  },
  {
    name: "June 31",
    uv: 40,
    zv: 60,
    pv: 20,
  },
];

const Chart = () => {
  return (
    <BarChart
      width={480}
      height={420}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#d3eee3" />
      <Bar dataKey="zv" stackId="a" fill="#ffe3c8" />
      <Bar dataKey="uv" stackId="a" fill="#f39c9a" />
    </BarChart>
  );
};

export default Chart;
