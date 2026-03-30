import * as React from 'react';
import { styles } from './style';
import { View, ScrollView } from "react-native";
import { CardMode } from "../../components/CardMode";
import { ModeModal } from '../../components/ModeModal';
import { useNavigation } from "@react-navigation/native";

export function GamePage() {
  const navigation = useNavigation();

  const [mVisible, setMVisible] = React.useState(false)
  const [mSelected, setMSelected] = React.useState(null)

  const mVisibleSwitch = (mode) => {
    setMVisible(!mVisible);
    setMSelected(mode)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.content}>
      <CardMode pressing={() => mVisibleSwitch("DEFAULT")} place="flex-start" img={require("../../../assets/default.png")} text="DEFAULT MODE" />
      <CardMode pressing={() => navigation.navigate("Quiz", {redirector: "Game", mode: "infinity", limited: 0})} place="flex-end" img={require("../../../assets/infinity.png")} text="INFINITY MODE" />
      <CardMode pressing={() => mVisibleSwitch("HIDDEN")} place="flex-start" img={require("../../../assets/hidden.png")} text="HIDDEN MODE" />

      <ModeModal close={() => mVisibleSwitch(null)} visible={mVisible} mode={mSelected} />
    </ScrollView>
  );
}