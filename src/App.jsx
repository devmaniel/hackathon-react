import React from "react";
import useFetchPokemon from "./hooks/fetchPokemon";

function App() {
  const { data: pokemon, loading, error } = useFetchPokemon("charizard");

  return (
    <div>
      <h1>Pokémon Viewer</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}

export default App;
