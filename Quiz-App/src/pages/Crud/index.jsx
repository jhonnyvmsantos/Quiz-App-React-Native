import * as React from "react";
import { QuizItem } from "../../components/QuizItem";
import { styles } from "./style";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ItemForm } from "../../components/ItemForm";
import { db } from "../../database";

export function CrudPage() {

  const [items, setItems] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [enabled, setEnabled] = React.useState({
    reflesh: false,
    mVisible: false
  })

  const switchEnabled = (type) => {
    switch (type) {
      case "mVisible":
        setEnabled({ ...enabled, mVisible: !enabled.mVisible });
        break;
      case "reflesh":
        setEnabled({ ...enabled, reflesh: !enabled.reflesh })
        break;
    }
  };

  const getQuizItems = async () => {
    const data = await db.getAllAsync("SELECT * FROM tbl_question;")
    if (data !== items) {
      setItems(data);
    }
  };

  React.useEffect(() => {
    getQuizItems();
  }, [enabled.reflesh]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ITEM LIST</Text>
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={getQuizItems}>
            <MaterialCommunityIcons name="reload" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            switchEnabled("mVisible");
            setEdit({});
          }}>
            <Feather name="plus-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.length > 0 && (
          <>
            {items.map((e, i) => <QuizItem key={i} text={e.title} edit={true} id={e.id}
              reflesh={() => switchEnabled("reflesh")}
              pressing={() => {
                setEdit(e);
                switchEnabled("mVisible");
              }} />
            )}
          </>
        )}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={enabled.mVisible}
        onRequestClose={() => switchEnabled("mVisible")}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => switchEnabled("mVisible")}>
              <MaterialCommunityIcons name="close-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <ItemForm item={edit} finish={() => {
              switchEnabled("mVisible");
              getQuizItems();
            }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
