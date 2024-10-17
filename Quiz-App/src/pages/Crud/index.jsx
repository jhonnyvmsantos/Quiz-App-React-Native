import * as React from "react";
import { QuizItem } from "../../components/QuizItem";
import { styles } from "./style";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AddItem } from "../../components/AddItem";

export function CrudPage() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const visibleSwitch = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ITEM LIST</Text>
        <TouchableOpacity onPress={visibleSwitch}>
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
            <AddItem/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
