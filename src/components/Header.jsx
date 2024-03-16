import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <div className="navbar">
      <form className="nav" onSubmit={submitHandler}>
        <Link to={"/"}>
          <ImSpoonKnife />
        </Link>
        <input
          className="input"
          type="text"
          placeholder="Search recipes..."
          id="searchBar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to={"/"} className="link">
          <h2>recipes</h2>
        </Link>
      </form>
    </div>
  );
};

export default Header;
