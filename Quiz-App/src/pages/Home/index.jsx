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
          navigation.navigate("Quiz", {redirector: "Home", limited: 0})
        }}>
          <Text style={styles.text}>ALL-ITEMS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: "black"}]}>
          <Text style={[styles.text, {color: "white"}]}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}