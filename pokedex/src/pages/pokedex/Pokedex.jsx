import React, { useState, useEffect } from 'react';
import getAPokemon from '../../server/routes/getAPokemon';
import './styles.css'

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokedex = [];
        for (let i = 1; i <= 151; i++) {
          pokedex.push(getAPokemon(i));
        }
        const data = await Promise.all(pokedex);
        setPokemonData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error)
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className='loading'>Carregando...</p>;
  }

  return (
    <div className='pokedex-container'>
      {pokemonData.map((pokemon, index) => (
        <div className="pokemon-card" key={index}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default Pokedex;