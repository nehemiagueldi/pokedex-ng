import React, { useContext } from "react";
import Navbar from "./../Components/Navbar";
import { FavoritesContext } from "../FavoritesContext";
import { useNavigate } from "react-router-dom";

const Mypokemon = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const getPokemonImageUrl = (pokemonId) => {
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`; // DREAM WORLD
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`; // OFFICIAL ARTWORK
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`; // HOME
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">My Pokemon</h2>
        {favorites.length === 0 ? (
          <p className="text-2xl font-semibold">No Pokémon added to favorites.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((pokemon) => (
              <div key={pokemon.id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-2xl transition duration-300 ease-in-out text-center">
                <img src={getPokemonImageUrl(pokemon.id)} alt={pokemon.name} className="mx-auto mb-4" style={{ width: "170px", height: "170px" }} />
                <h3 className="text-xl font-bold mb-2 text-center">{pokemon.name}</h3>
                <div className="flex justify-evenly">
                  <button onClick={() => navigate(`/pokemon/${pokemon.name}`)} className="shadow-xl bg-gradient-to-tl from-btnview to-paginationnex hover:from-btnviewp hover:to-btnviewd text-whitet font-bold py-2 px-4 rounded-full duration-300">
                    View Details
                  </button>
                  <button className="shadow-xl bg-gradient-to-tl from-backbtnb from-10% to-backbtna to-90% hover:from-btnview hover:to-paginationp text-whitet font-bold py-2 px-4 rounded-full duration-300" onClick={() => removeFromFavorites(pokemon.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Mypokemon;
