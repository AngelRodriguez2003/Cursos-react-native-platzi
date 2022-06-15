import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const goToPokemon = () => {
    // console.log("vamos al pokemon:  ", pokemon.id);
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgSyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgSyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image
              source={{
                uri: pokemon.image,
              }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 2,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    position: "absolute",

    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 15,
    paddingTop: 10,
    fontWeight: "bold",
  },
});
export default PokemonCard;
