import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StartScreen from '../screens/StartScreen';
import HomeRoomsScreen from '../screens/HomeRoomsScreen';
import RoomDetailsScreen from '../screens/RoomDetailsScreen';
import MainTabNavigator from './BottomTabNavigator'; // Assuming this manages Dashboard, HomeRooms, and Blogs

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false,}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} options={{headerShown: false,}} />
      <Stack.Screen name="RoomDetailsScreen" component={RoomDetailsScreen} options={{headerShown: false,}} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
