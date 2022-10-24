import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";
import { Filter } from "../components/Filter";
import { Menu } from "../components/Menu";

export function PokemonsContainer() {
  const [sliderValue, setSliderValue] = React.useState([0, 3904]);
  const [typesPokemon, setTypesPokemon] = React.useState([]);

  const handleChange = (value) => {
    setSliderValue(value);
  };

  const handleCheckBox = (type) => {
    if (!typesPokemon.includes(type)) {
      setTypesPokemon([...typesPokemon, type]);
      return;
    }
    const removeType = typesPokemon.filter(
      (typePokemon) => typePokemon !== type
    );
    setTypesPokemon(removeType);
  };

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 154 },
  });

  const filterByType = (types) => {
    const haveType = types.map((type) => {
      if (typesPokemon.length) {
        return typesPokemon.includes(type);
      } else return true;
    });
    return !!haveType[0] || !!haveType[1];
  };

  const filteredValue = pokemons.filter((pokemon) => {
    if (
      pokemon.maxCP >= sliderValue[0] &&
      pokemon.maxCP <= sliderValue[1] &&
      filterByType(pokemon.types)
    ) {
      return pokemon;
    }
  });

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="container">
        <div className="infoDex">
          <h1>Lista de Pokemons</h1>
          <h2>Total visível:{filteredValue.length}</h2>
        </div>
        <div className="scroll">
          <Pokemon pokemons={filteredValue} />
        </div>
        <div>
          <Filter
            sliderValue={sliderValue}
            handleChange={(value) => handleChange(value)}
            handleCheckBox={(value) => handleCheckBox(value)}
          />
        </div>
      </div>
    </>
  );
}
