import React, { Component } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { typesPokemon } from "../utils/typespokemon.js";


function valuetext(value) {
  return `${value}°C`;
}

export function Filter() {
  const [value, setValue] = React.useState([0, 3904]);
  const [types, setTypes] = React.useState([]);
  const filteredValue = value.filter((pokemon) => {

    console.log(pokemon)
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckBox = (type) => {
    if (!types.includes(type)) {
      setTypes([...types, type])
      return
    }
    const removeType = types.filter((typePokemon) => typePokemon !== type)
    setTypes(removeType)
  };

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
            value={value}
            min={0}
            max={4000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>

      <div className="cpTotal">
        <h6>{value[0]}</h6>
        <h6>{value[1]}</h6>
      </div>
      <h5 className="infoSlide">Types</h5>


      <div className="elemental">
        {
          typesPokemon.map(({ type }) => (
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
          )
          )
        }
      </div>



    </div>
  );



}
