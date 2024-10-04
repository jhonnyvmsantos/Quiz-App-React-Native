import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes';
import * as db from './src/database';

export default function App() {
  setTimeout(() => {
    db.playground();
  }, 1000);

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
