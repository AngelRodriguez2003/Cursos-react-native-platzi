import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import Pokemon from "../screens/Pokemon";

const PokedexNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Pokedex">
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
