import * as React from 'react';
import { styles } from './style';
import { View, ScrollView } from "react-native";
import { CardGame } from "../../components/CardGame";
import { SimpleModal } from '../../components/SimpleModal';

export function GamePage() {
  const [mVisible, setMVisible] = React.useState(false)

  const mVisibleSwitch = () => {
    setMVisible(!mVisible);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.content}>
      <CardGame pressing={() => mVisibleSwitch()} place="flex-start" img={require("../../../assets/casual.png")} text="CASUAL MODE" />
      <CardGame pressing={() => mVisibleSwitch()} place="flex-end" img={require("../../../assets/random.png")} text="RANDOM MODE" />
      <CardGame pressing={() => mVisibleSwitch()} place="flex-start" img={require("../../../assets/hidden.png")} text="HIDDEN MODE" />

      <SimpleModal close={() => mVisibleSwitch()} visible={mVisible}/>
    </ScrollView>
  );
}