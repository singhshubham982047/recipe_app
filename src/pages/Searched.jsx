import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Searched.css";

const Searched = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [search, setSearch] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
    );
    const data = await res.json();
    setSearch(data.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="search">
      {search?.map((item) => (
        <div className="search_card" key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </Link>
          <div className="gradient"></div>
        </div>
      ))}
    </div>
  );
};

export default Searched;
