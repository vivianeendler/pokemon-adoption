import axios from 'axios';

const getAPokemon = async (pokemonNameOrId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    return response.data;

  } catch (error) {
    throw error;
  }
};

export default getAPokemon;
