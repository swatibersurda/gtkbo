import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
// import Prac from "./Prac";
import DataVisulatization from "./DataVisulatization";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route exact path="datavisual" element={<DataVisulatization />}></Route>
    </Routes>
  );
};
