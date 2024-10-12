import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomePage } from '../pages/Home';
import { CrudPage } from '../pages/Crud';
import { GamePage } from '../pages/Game';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='Tabs'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tabs" component={TabsRoutes} />
    </Stack.Navigator>
  );
}

function TabsRoutes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Game"
        component={GamePage}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "game-controller" : "game-controller-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name="Crud"
        component={CrudPage}
        options={{
          tabBarLabel: "Editor",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "build" : "build-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}