import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const data = [
  { name: "January", users: 20, thread: 50, report: 120 },
  { name: "Febuary", users: 70, thread: 40, report: 100 },
  { name: "March", users: 100, thread: 400, report: 101 },
  { name: "April", users: 120, thread: 200, report: 190 },
  { name: "Mei", users: 110, thread: 90, report: 110 },
  { name: "June", users: 200, thread: 60, report: 310 },
];
const ChartMain = () => {
  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      style={{ margin: "60px 0px 0px 0px" }}
    >
      <Line type="monotone" dataKey="users" stroke="#2196f3" strokeWidth={3} />
      <Line type="monotone" dataKey="thread" stroke="red" strokeWidth={3} />
      <Line type="monotone" dataKey="report" stroke="orange" strokeWidth={3} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        width={100}
        wrapperStyle={{
          top: 10,
          right: -120,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
    </LineChart>
  );
};

export default ChartMain;
