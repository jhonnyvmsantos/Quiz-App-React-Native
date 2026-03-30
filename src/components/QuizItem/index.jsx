import { styles } from './style';
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { db } from '../../database';

export function QuizItem({ text, edit, id, reflesh, pressing }) {

  const deleteItemQuiz = () => {
    db.runAsync('DELETE FROM tbl_question WHERE id = ?', id)
      .then(() => {
        console.warn("Item Quiz Delete.");
        reflesh()
      })
      .catch(() => {
        console.warn("Error Deleting Quiz Item.");
      })
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
      </View>

      {edit && (
        <View style={styles.buttons}>
          <TouchableOpacity onPress={pressing}>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteItemQuiz}>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}