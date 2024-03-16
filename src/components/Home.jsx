import React from "react";
import "./Home.css";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Initial from "./Initial";
import Cuisine from "../pages/Cuisine";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <SideNav />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
