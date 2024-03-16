import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <>
      <h3>Popular Picks</h3>
      <Splide options={{ type: "loop", perPage: 4, gap: "10px" }}>
        {popular.map((recipe) => (
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

export default Popular;
