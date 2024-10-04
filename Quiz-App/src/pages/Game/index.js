import React from "react";
import { styles } from './style';
import { View } from "react-native";
import { CardGame } from "../../components/CardGame";

export function GamePage() {
  return (
    <View style={styles.container}>
      <CardGame img={require("../../../assets/casual.png")} />
      <CardGame img={require("../../../assets/random.png")} />
      <CardGame img={require("../../../assets/hidden.png")} />
    </View>
  );
}