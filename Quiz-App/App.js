import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes';
import * as db from './src/database';

export default function App() {
  const [hidden, setHidden] = React.useState(false);

  setTimeout(() => {
    db.playground();
  }, 1000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={hidden}
      />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
});
