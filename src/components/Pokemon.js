import React from 'react';


export function Pokemon({ pokemon }) {

  return (

    <div className="pokemon">
      <div className="pokemonImage">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemonName">
        <p>{pokemon.name}</p>
        <div className='pokemonContainerType'>
          {pokemon.types.map((type) => (<span key={type} className='pokemonTypes'>{type}</span>))}
        </div>
        <span className="pokemonMeta">{pokemon.maxCP}</span>
      </div>
      <div className='pokemonNumber'>
        <span>{pokemon.number}</span>
      </div>

    </div>

  )

}
