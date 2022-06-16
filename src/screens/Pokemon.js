import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import Icon from "@expo/vector-icons/FontAwesome5";

const Pokemon = (props) => {
  const {
    route: { params },
    navigation,
  } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => {
        return (
          <Icon
            name="arrow-left"
            color="#fff"
            size={20}
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        );
      },
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
