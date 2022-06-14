import { Image, Text } from "react-native";
import React from "react";
Icon;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccoutScreen from "../screens/Accout";
import Icon from "@expo/vector-icons/FontAwesome5";

import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import { getPokemonsApi } from "../api/pokemon";
import ScannerQr from "../screens/ScannerQr";

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
          /*           headerTransparent: true,
          headerTitle: "", */
          headerShown: false,
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
          /*           tabBarLabel: (props) => {
            const { focused, color, position } = props;
            if (focused) {
              return <Text></Text>;
            } else {
              return (
                <Text style={{ color: color, fontSize: 9 }}>Mi cuenta</Text>
              );
            }
          },

          tabBarIcon: (props) => {
            const { color, size } = props;
            if (props.focused) {
              return renderPokeBall();
            } else {
              return <Icon name="user" color={color} size={size} />;
            }
          }, */
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerQr}
        options={{ headerTransparent: true, tabBarShowLabel: false }}
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
