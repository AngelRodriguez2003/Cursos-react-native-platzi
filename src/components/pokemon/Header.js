import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const Header = ({ name, order, image, type }) => {
  const color = getColorByPokemonType(type);
  const bgSyles = { backgroundColor: color, ...styles.bg };

  return (
    <View>
      <View style={bgSyles} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: 400,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
});
