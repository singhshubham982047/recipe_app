import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Vegies = () => {
  const [vegie, setVegie] = useState([]);
  useEffect(() => {
    getVegies();
  }, []);

  const getVegies = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    setVegie(data.recipes);
  };
  return (
    <>
      <h3>Vegies Picks</h3>
      <Splide options={{ type: "loop", perPage: 3, gap: "10px" }}>
        {vegie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <div className="card" key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className="gradient"></div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Vegies;
