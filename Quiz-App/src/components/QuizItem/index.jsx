import { styles } from './style';
import { TouchableOpacity, View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { db } from '../../database';

export function QuizItem({ text, edit, id, reflesh }) {

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
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>

      {edit && (
        <View style={styles.buttons}>
          <TouchableOpacity>
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