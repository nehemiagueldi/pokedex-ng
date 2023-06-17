import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FavoritesContext } from "../FavoritesContext";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [showAllMoves, setShowAllMoves] = useState(false);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, types, weight, height, abilities, moves, stats } = pokemonData;
  const movesToShowCount = showAllMoves ? moves.length : 5;
  const movesToShow = moves.slice(0, movesToShowCount);

  const isFavorite = favorites.some((pokemon) => pokemon.name === name);

  const addToFavorites = () => {
    setFavorites((prevFavorites) => [...prevFavorites, pokemonData]);
    navigate("/mypokemon");
  };

  const removeFromFavorites = () => {
    setFavorites((prevFavorites) => prevFavorites.filter((pokemon) => pokemon.name !== name));
  };

  return (
    <div className="container mx-auto p-4">
      <button className="mb-4 bg-gradient-to-tl from-btnviewd to-btnviewh hover:from-backbtna hover:to-backbtnb text-whitet p-2  rounded-lg font-semibold" onClick={() => navigate("/")}>
        {" "}
        🏠 Back to Home
      </button>
      <div className="rounded-lg shadow-2xl p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center">
            <img src={pokemonData.sprites.front_default} alt={name} className="mx-auto max-w-full" style={{ width: "200px", height: "200px" }} />
          </div>
          <div>
            <div className="grid grid-cols-2 justify-items-center gap-4">
              <div>
                <h3 className="text-xl font-bold my-2">Type</h3>
                <ul>
                  {types.map((type) => (
                    <li key={type.slot}>{type.type.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold my-2">Weight</h3>
                <p>{weight}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold my-2">Height</h3>
                <p>{height}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold my-2">Abilities</h3>
                <ul>
                  {abilities.map((ability) => (
                    <li key={ability.slot}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 justify-items-center gap-4">
              <div className="ml-8 md:ml-0">
                <h3 className="text-xl font-bold my-2">Moves</h3>
                <ul>
                  {movesToShow.map((move) => (
                    <li key={move.move.name}>{move.move.name}</li>
                  ))}
                </ul>
                {moves.length > 5 && (
                  <button className="bg-gradient-to-tl from-btnviewp to-btnviewd hover:from-btnview hover:to-paginationnex text-whitet p-1 rounded-lg font-semibold" onClick={() => setShowAllMoves(!showAllMoves)}>
                    {showAllMoves ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
              <div className="ml-16 md:ml-0">
                <h3 className="text-xl font-bold my-2">Stats</h3>
                <ul>
                  {stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly my-4">
            {isFavorite ? (
              <button onClick={removeFromFavorites} className="shadow-xl bg-gradient-to-tl from-secondary to-paginationp hover:from-btnmypokemb hover:to-backbtna text-whitet font-bold py-2 px-4 rounded-full duration-300">
                Remove from Favorites
              </button>
            ) : (
              <button onClick={addToFavorites} className="shadow-xl bg-gradient-to-tl from-btnmypokemb to-btnviewh hover:from-secondary hover:to-paginationp text-whitet font-bold py-2 px-4 rounded-full duration-300">
                Add to Favorites
              </button>
            )}
            <button onClick={() => navigate("/mypokemon")} className="shadow-xl bg-gradient-to-tl from-secondary to-btnmypokema hover:from-btnmypokemb hover:to-btnview text-whitet font-bold py-2 px-4 rounded-full duration-300">
              My Pokemon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
