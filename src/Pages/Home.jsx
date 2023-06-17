import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../Components/Pagination";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonList(currentPage).then((list) => {
      setPokemonList(list);
    });
  }, [currentPage]);

  const getPokemonList = (page) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`)
      .then((response) => {
        const promises = response.data.results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        });
        return Promise.all(promises).then((pokemonData) => {
          return pokemonData.map((data) => {
            return {
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
            };
          });
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePokemonDetails = (name) => {
    navigate(`/pokemon/${name}`);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const pokemonData = response.data;
        console.log("Fetched Pokemon Data:", pokemonData);
        navigate.push({
          pathname: `/pokemon/${name}`,
          state: {
            pokemon: pokemonData,
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPokemonImageUrl = (pokemonId) => {
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`; // DREAM WORLD
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`; // OFFICIAL ARTWORK
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`; // HOME
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-4">Pokemon List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.id} className="rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out text-center">
              <img src={getPokemonImageUrl(pokemon.id)} alt={pokemon.name} className="w-full h-auto max-h-48 object-contain rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
                <button
                  className="shadow-xl bg-gradient-to-tl from-btnview to-paginationnex hover:from-btnviewp hover:to-btnviewd text-whitet font-bold py-2 px-4 rounded-full duration-300"
                  onClick={() => handlePokemonDetails(pokemon.name)}
                >
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
