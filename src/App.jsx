import './App.css'
import PokemonCard from "./Components/PokemonCard";
import { useState } from "react";
import Navbar from './Components/Navbar';

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/800px-Salam%C3%A8che-RFVF.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "MewTwo",
    imgSrc:
      "https://shop7.webmodule.prestashop.net/pokedoge/11857-large_default/mewtwo.jpg",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  return (<div>
    <Navbar pokemonList={pokemonList} setIndex={setIndex}/>
    <PokemonCard pokemon={pokemonList[index]} />
    </div>);
}

export default App;



