import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext, lastPokemon }) => {
  const [morePokemons, setmorePokemons] = useState(true);
  const loadMore = () => {
    if (isNext) {
      loadPokemons();
    } else {
      setmorePokemons(false);
    }
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={() => loadMore()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        morePokemons ? (
          <ActivityIndicator size="large" style={styles.spinner} color="red" />
        ) : (
          <Text style={{ textAlign: "center", margin: 60 }}>
            No hay mas pokemons :({" "}
          </Text>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    /*     marginBottom: 20,
     */
  },
});
export default PokemonList;
