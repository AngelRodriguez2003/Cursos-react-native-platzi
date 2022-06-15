import { StyleSheet, Text, View } from "react-native";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import { capitalize } from "lodash";

const Type = ({ types }) => {
  return (
    <View style={styles.content}>
      <Text>Tipo:</Text>
      {types.map((type) => {
        const color = getColorByPokemonType(type.type.name);
        return (
          <View
            key={type.type.name}
            style={{ ...styles.pill, backgroundColor: color }}
          >
            <Text>{capitalize(type.type.name)}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    /*  
    paddingHorizontal: 10,
       marginTop: 40,
     */
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
