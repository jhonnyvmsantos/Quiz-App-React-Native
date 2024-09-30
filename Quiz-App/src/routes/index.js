import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/Home';
import { CrudPage } from '../pages/Crud';

const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
      />

      <Tab.Screen
        name="Crud"
        component={CrudPage}
        options={{
          tabBarLabel: "Editor"
        }}
      />
    </Tab.Navigator>
  );
}