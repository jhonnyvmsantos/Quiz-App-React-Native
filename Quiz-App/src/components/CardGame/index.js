import React from "react";
import { styles } from './style';
import { View, Text, Image } from "react-native";

export function CardGame({ img }) {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text>CARD</Text>
    </View>
  );
}