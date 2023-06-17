import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-around flex-wrap bg-gradient-to-tl from-primary from-20% to-secondary to-80% p-6">
      <div className="flex items-center ">
        <button onClick={() => navigate("/")} className="font-bold text-whitet text-3xl hover:text-ohover duration-300 tracking-tight">
          POKÉDEXNG
        </button>
      </div>
      <div className="flex items-center ">
        <button onClick={() => navigate("/home")} className="mr-6 font-semibold text-whitet text-lg hover:text-ohover duration-300">
          🏠 Home
        </button>
        <button onClick={() => navigate("/mypokemon")} className="text-whitet text-lg font-semibold hover:text-ohover duration-300">
          🪺 My Pokemon
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
