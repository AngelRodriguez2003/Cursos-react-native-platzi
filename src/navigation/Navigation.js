import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccoutScreen from "../screens/Accout";
import Icon from "@expo/vector-icons/FontAwesome5";

import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemon";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  getPokemonsApi();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccoutScreen}
        options={{
          headerTitle: "Mi cuenta",
          headerTitleAlign: "center",
          tabBarLabel: "MiCuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const renderPokeBall = () => (
  <Image
    source={require("../assets/pokeball.png")}
    style={{
      width: 75,
      height: 75,
      top: -15,
    }}
  />
);
