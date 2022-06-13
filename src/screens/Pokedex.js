import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../api/pokemon";

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
      console.log(urls);
      console.log(
        urls
          .map((pok) => getPokemonDetailsByUrlApi(pok))
          .then((data) => data)
          .catch((error) => ({ "": "" }))
      );

      setPokemons(urls);
    } catch (error) {
      throw error;
    }
  };
  return (
    <View>
      <Text>Aqui va algo</Text>
    </View>
  );
};

export default Pokedex;
