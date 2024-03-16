import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [detail, setDetail] = useState({});
  const [active, setActive] = useState("instructions");
  const API_KEY = import.meta.env.VITE_API_KEY;
  let params = useParams();
  const fetchDetail = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );
    const data = await res.json();
    setDetail(data);
  };
  useEffect(() => {
    fetchDetail();
  }, [params.name]);
  return (
    <div className="detail">
      <div className="title">
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <div className="info">
        <button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </button>
        <button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </button>
        {active === "instructions" && (
          <div className="summary">
            <h3>Summary</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: detail.summary,
              }}
            ></p>
            <h3>Instructions</h3>
            <ol type="1">
              <li
                dangerouslySetInnerHTML={{ __html: detail.instructions }}
              ></li>
            </ol>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {detail.extendedIngredients.map((ingredients) => (
              <li key={ingredients.id}>{ingredients.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
