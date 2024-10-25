import React from "react";
import { styles } from './style';
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export function QuizAlt({ text }) {
  const [removed, setRemoved] = React.useState(false);

  const switchRemoved = () => {
    setRemoved(!removed)
  }

  return (
    <View style={[styles.container, removed && styles.removed]}>
      <TouchableOpacity disabled={removed} style={styles.content}>
        <Text numberOfLines={2} style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={switchRemoved}>
        <Feather name="eye-off" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}