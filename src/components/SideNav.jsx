import React from "react";
import { NavLink } from "react-router-dom";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa6";
import { CiBowlNoodles } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
import { GiOctopus } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import "./SideNav.css";

const SideNav = () => {
  return (
    <>
      <NavLink className={"navLink"} to="/cuisine/indian">
        <FaBowlFood />
        <h4>Indian</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/american">
        <GiHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanees</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/french">
        <FaCookieBite />
        <h4>French</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/chinese">
        <CiBowlNoodles />
        <h4>Chinese</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/british">
        <PiBowlFood />
        <h4>British</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/korean">
        <GiOctopus />
        <h4>Korean</h4>
      </NavLink>
      <NavLink className={"navLink"} to="/cuisine/german">
        <GiChickenOven />
        <h4>German</h4>
      </NavLink>
    </>
  );
};

export default SideNav;
