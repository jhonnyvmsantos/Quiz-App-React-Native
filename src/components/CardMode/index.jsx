import { styles } from './style';
import { Text, Image, TouchableOpacity } from "react-native";

export function CardMode({ img, place, text, pressing }) {
  return (
    <TouchableOpacity style={[styles.container, {alignSelf: place}]} onPress={pressing}>
      <Image source={img} style={styles.img} />
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}