import React, { useEffect, useState } from "react";
import "./Cuisine.css";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  let params = useParams();
  const getCuisine = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`
    );
    const data = await res.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    if (!params.type) return;
    getCuisine(params.type);
  }, [params.type]);
  return (
    <div className="cuisine">
      {cuisine.map((item) => (
        <Link to={"/recipe/" + item.id} key={item.id} className="link">
          <div className="cuisin_card" key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cuisine;
