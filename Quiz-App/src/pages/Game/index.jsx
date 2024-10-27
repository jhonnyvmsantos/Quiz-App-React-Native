import * as React from 'react';
import { styles } from './style';
import { View, ScrollView } from "react-native";
import { CardGame } from "../../components/CardGame";
import { ModeModal } from '../../components/ModeModal';

export function GamePage() {
  const [mVisible, setMVisible] = React.useState(false)
  const [mSelected, setMSelected] = React.useState(null)

  const mVisibleSwitch = (mode) => {
    setMVisible(!mVisible);
    setMSelected(mode)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.content}>
      <CardGame pressing={() => mVisibleSwitch("Default")} place="flex-start" img={require("../../../assets/default.png")} text="DEFAULT MODE" />
      <CardGame pressing={() => mVisibleSwitch("Infinity")} place="flex-end" img={require("../../../assets/infinity.png")} text="INFINITY MODE" />
      <CardGame pressing={() => mVisibleSwitch("Hidden")} place="flex-start" img={require("../../../assets/hidden.png")} text="HIDDEN MODE" />

      <ModeModal close={() => mVisibleSwitch()} visible={mVisible} mode={mSelected}/>
    </ScrollView>
  );
}