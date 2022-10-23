import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';
import { Filter } from '../components/Filter';
import { Menu } from '../components/Menu';

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 154 },
  });

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="container">

        <div className="infoDex">
          <h1>Lista de Pokemons</h1>
          <h2>Total visível:{pokemons.length}</h2>
        </div>
        <div className='scroll'>
          {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
        <div>
          <Filter />
        </div>

      </div>
    </>
  )
}
