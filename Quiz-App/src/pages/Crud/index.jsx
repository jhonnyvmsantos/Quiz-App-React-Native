import * as React from "react";
import { QuizItem } from "../../components/QuizItem";
import { styles } from "./style";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AddItem } from "../../components/AddItem";
import { db } from "../../database";

export function CrudPage() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const visibleSwitch = () => {
    setModalVisible(!modalVisible);
  };

  const getQuizItems = () => db.withExclusiveTransactionAsync(async (txn) => {
    const dt = await txn.getAllAsync("SELECT * FROM tbl_question;")
    setItems(dt)
  });

  React.useEffect(() => {
    getQuizItems();
    console.log(items);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ITEM LIST</Text>
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={getQuizItems}>
            <MaterialCommunityIcons name="reload" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={visibleSwitch}>
            <Feather name="plus-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <QuizItem edit={true}/>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={visibleSwitch}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={visibleSwitch}>
              <MaterialCommunityIcons name="close-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <AddItem finish={visibleSwitch}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
