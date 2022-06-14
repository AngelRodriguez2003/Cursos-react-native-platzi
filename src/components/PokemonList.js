import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      //   showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
export default PokemonList;
