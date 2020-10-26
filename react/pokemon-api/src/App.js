import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ output, setOutput ] = useState("");

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);

  const handleClick = () => {
    setOutput(pokemon.map((poke, i) => 
      <li key={i}>{ poke.name }</li>
    ));
  }

  return (
    <div className="wrapper">
      <button className="pokemon" onClick={ handleClick }>Fetch Pokemon</button>
      <ol className="output">{ output }</ol>
    </div>
  );
}

export default App;