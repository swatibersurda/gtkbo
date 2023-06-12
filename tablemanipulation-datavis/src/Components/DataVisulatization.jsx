import React from "react";
import { useSelector } from "react-redux";
// import { ResponsiveContainer, LineChart, Line } from "recharts";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Text,
  YAxis,
  Legend,
  Tooltip,
  XAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

const DataVisulatization = () => {
  const data = useSelector((state) => state.AppReducer.sortData);
  console.log(data, "data at datavisulization");
  return (
    <>
      <div className="dataParentDiv">
        <div className="lineChart">
          <h1>Rank To Id </h1>
          <ResponsiveContainer width={"90%"} aspect={3}>
            <LineChart
              width={100}
              data={data}
              margin={{ top: 10, right: 10, width: 100, height: 100 }}
            >
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey={"symbol"} interval={"preserveStartEnd"} />
              <YAxis />
              {/* tells for which data key making line chart */}
              <Legend />
              <Tooltip />
              {/* line created name and id  */}
              <Line
                type={"monotone"}
                dataKey={"rank"}
                stroke="red"
                activeDot={{ r: 18 }}
                strokeWidth="2"
              />
              <Line
                type={"monotone"}
                dataKey={"id"}
                stroke="green"
                activeDot={{ r: 18 }}
                strokeWidth="2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="areaChart" width={"80%"} aspect={3}>
          <h1>Rank To Percent_Change_1h </h1>
          <ResponsiveContainer width={"90%"} aspect={3}>
            <BarChart width={600} height={250} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rank" fill="#2768ba" />
              <Bar dataKey="percent_change_1h" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default DataVisulatization;
