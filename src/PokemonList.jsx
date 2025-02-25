import React from 'react';

export default function PokemonList({ pokemon }) {

    return (

        <div>
            {pokemon.map(pokeman => (
                <div key={pokeman}>{pokeman}</div>
            ))}
        </div>
    )
}