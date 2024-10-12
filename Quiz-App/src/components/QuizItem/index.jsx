import { styles } from './style';
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export function QuizItem({ text, edit }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>Item</Text>
      </TouchableOpacity>

      {edit && (
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}