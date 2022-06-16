import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";

const Accout = () => {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default Accout;
