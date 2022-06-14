import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const { data } = await getPokemonsApi();
      const urls = data.results.map((pok) => pok.url);
      let pokemonArray = [];
      for (const pokemonUrl of urls) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemonUrl);
        pokemonArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons(pokemonArray);
    } catch (error) {
      throw error;
    }
  };
  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  );
};

export default Pokedex;
