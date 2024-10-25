import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomePage() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={require("../../../assets/quiz.png")} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Quiz", {redirector: "Home"})
        }}>
          <Text style={styles.text}>CASUAL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: "black"}]}>
          <Text style={[styles.text, {color: "white"}]}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}