import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Harrasment",
    pv: 400,
  },
  {
    name: "Violation",
    pv: 367,
  },
  {
    name: "Child Abuse",
    pv: 548,
  },
  {
    name: "Spam",
    pv: 200,
  },
  {
    name: "Annoying",
    pv: 158,
  },
];

export const DetailsChart = () => {
  return (
    <ResponsiveContainer width={650} aspect={4}>
      <ComposedChart
        style={{
          display: "flex",
        }}
        className="chart-user"
        layout="vertical"
        data={data}
        margin={{
          bottom: 25,
          top: 0,
        }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        {/* <Legend layout="horizontal" verticalAlign="middle" align="right" height={90} width={10}/> */}
        <Bar barSize={15} dataKey="pv" fill="#0074C1" className="bar-size" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
