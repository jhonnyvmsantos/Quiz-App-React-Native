import React from "react";
import { styles } from './style';
import { Text, Image, TouchableOpacity } from "react-native";

export function CardGame({ img, place, text }) {
  return (
    <TouchableOpacity style={[styles.container, {alignSelf: place}]}>
      <Image source={img} style={styles.img} />
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}