// components/LogoLogin.tsx
import React from "react-native";
import { View, Image } from "react-native";
import { globalStyles } from "../assets/global"

export default function LogoLogin() {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/AutoFridge.png')} // Update this with the correct path
        style={globalStyles.logo}
      />
    </View>
  );
}
