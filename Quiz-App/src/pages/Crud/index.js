import { QuizItem } from '../../components/QuizItem';
import { styles } from './style';
import { View, Text, ScrollView } from "react-native";

export function CrudPage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.content}>
        <QuizItem edit={true}/>
    </ScrollView>
  );
}