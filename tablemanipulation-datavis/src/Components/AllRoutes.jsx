import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Prac from "./Prac";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  );
};
