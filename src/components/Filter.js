import React, { Component } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { typesPokemon } from "../utils/typespokemon.js";

export function Filter({ sliderValue, handleChange, handleCheckBox }) {
  return (
    <div className="filter">
      <div className="slide">
        <h1>Filtro</h1>
      </div>

      <h5 className="infoSlide">MaxCP</h5>
      <div className="sliderMui">
        <Box
          sx={{
            width: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Slider
            getAriaLabel={() => "minCP e maxCP"}
            value={sliderValue}
            min={0}
            max={4000}
            onChange={(e, val) => handleChange(val)}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>

      <div className="cpTotal">
        <h6>{sliderValue[0]}</h6>
        <h6>{sliderValue[1]}</h6>
      </div>
      <h5 className="infoSlide">Types</h5>

      <div className="elemental">
        {typesPokemon.map(({ type }) => (
          <div key={type} className="check">
            <label for="checkbox1" className="topping">
              <input
                onChange={() => handleCheckBox(type)}
                className="checkbox1"
                type="checkbox"
                role="checkbox"
                value={type}
              />
              <span className="custom">{type}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
