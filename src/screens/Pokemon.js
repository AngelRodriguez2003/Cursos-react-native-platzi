import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Pokemon = (props) => {
  const { route, navigation } = props;
  console.log(route);
  return (
    <SafeAreaView edges={["right", "top", "left"]}>
      <Text>Pokemon</Text>
    </SafeAreaView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
