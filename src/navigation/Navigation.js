import { Image } from "react-native";
import React from "react";
Icon;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";
import AccoutScreen from "../screens/Accout";
import FavoriteScreen from "../screens/Favorite";
import ScannerQr from "../screens/ScannerQr";
import PokedexNavigation from "./PokedexNavigation";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

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
        name="PokedexNavigation"
        component={PokedexNavigation}
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
*/
          tabBarIcon: (props) => {
            const { color, size } = props;
            return <Icon name="user" color={color} size={size} />;

            //logica para cambia icono a pokebola cuando esta activo
            // if (props.focused) {
            //   return renderPokeBall();
            // } else {
            //   return <Icon name="user" color={color} size={size} />;
            // }
          },
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerQr}
        options={{ headerShown: false }}
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
