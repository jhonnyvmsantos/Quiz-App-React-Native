import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomePage() {

  const navigation = useNavigation();

  const gitTransfer = async () => {
    const url = "https://github.com/jhonnyvmsantos"
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={require("../../../assets/quiz.png")} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Quiz", { redirector: "Home", limited: 0 })
        }}>
          <Text style={styles.text}>ALL-ITEMS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gitTransfer} style={[styles.button, { backgroundColor: "black" }]}>
          <Text style={[styles.text, { color: "white" }]}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}