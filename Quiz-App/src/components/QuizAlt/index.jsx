import { styles } from './style';
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export function QuizAlt({text}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Feather name="eye-off" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}