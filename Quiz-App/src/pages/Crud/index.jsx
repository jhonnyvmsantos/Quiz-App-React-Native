import { QuizItem } from "../../components/QuizItem";
import { styles } from "./style";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export function CrudPage() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ITEM LIST</Text>
        <TouchableOpacity>
          <Feather name="plus-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <QuizItem edit={true} />
      </ScrollView>
    </View>
  );
}
