import { styles } from './style';
import { View, ScrollView } from "react-native";
import { CardGame } from "../../components/CardGame";

export function GamePage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <CardGame place="flex-start" img={require("../../../assets/casual.png")} text="CASUAL MODE"/>
        <CardGame place="flex-end" img={require("../../../assets/random.png")} text="RANDOM MODE"/>
        <CardGame place="flex-start" img={require("../../../assets/hidden.png")} text="HIDDEN MODE"/>
      </View>
    </ScrollView>
  );
}