import React from "react";
import "./styles.css";
import { useState } from "react";

const places = {
  Waterfalls: [
    { name: "Kuntala Falls", rating: "5/5" },
    { name: "Gayatri Waterfalls", rating: "3.5/5" },
    { name: "Pochera Waterfalls", rating: "3.2/5" }
  ],

  Temples: [
    {
      name: " Gnana Saraswathi Temple",
      rating: "4/5"
    },
    {
      name: "Chilkur Balaji Temple",
      rating: "4.2/5"
    },
    {
      name: "Thousand Pillar Temple",
      rating: "4.2/5"
    }
  ],
  fort: [
    {
      name: "Golconda Fort",
      rating: "4.2/5"
    },
    {
      name: "Khammam Fort",
      rating: "3.4/5"
    },
    {
      name: "Warangal Fort",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fort");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Visting Places in Telangana</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite places. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(places).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {places[selectedGenre].map((visiting) => (
            <li
              key={visiting.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {visiting.name} </div>
              <div style={{ fontSize: "smaller" }}> {visiting.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
