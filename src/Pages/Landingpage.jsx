import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import pokemonBallImage from "../Photo/pokeball-pokemon-removebg.png";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-landingpc to-landingpa">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-whitet mb-8">Welcome to Pokédex NG</h1>
          <p className="text-xl font-semibold text-whitet mb-8">Discover and explore all your favorite Pokémon!</p>
          <div className="flex items-center justify-center flex-wrap flex-col">
            <div>
              <button onClick={() => navigate("/home")} className="bg-whitet text-landingpa hover:bg-primary hover:text-whitet text-lg font-bold py-3 px-6 duration-300 rounded-full shadow-lg">
                Get Started
              </button>
            </div>
            <div className="flex items-center justify-center flex-wrap">
              <Link to={"https://pokeapi.co/docs/v2"} target="_blank">
                <button className="bg-whitet text-landingpf hover:bg-landingpg hover:text-whitet text-lg font-bold py-3 px-6 mt-3 mx-2 duration-300 rounded-full shadow-lg">PokeApi</button>
              </Link>
              <Link to={"https://github.com/nehemiagueldi/pokedex-ng"} target="_blank">
                <button className="bg-whitet text-landingpd hover:bg-landingpd hover:text-whitet text-lg font-bold py-3 px-6 mt-3 mx-2 duration-300 rounded-full shadow-lg">Github</button>
              </Link>
              <Link to={"https://github.com/PokeAPI/sprites"} target="_blank">
                <button className="bg-whitet text-landingpf hover:bg-landingpg hover:text-whitet text-lg font-bold py-3 px-6 mt-3 mx-2 duration-300 rounded-full shadow-lg">PokeImg</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
