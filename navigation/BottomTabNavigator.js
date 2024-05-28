import { Ionicons } from '@expo/vector-icons'; // Ensure you have vector-icons installed
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BlogsScreen from '../screens/BlogsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeRoomsScreen from '../screens/HomeRoomsScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Dashboard') {
                    iconName = focused ? 'pie-chart'  : 'pie-chart-outline';
                } else if (route.name === 'HomeRooms') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Blogs') {
                    iconName = focused ? 'bookmark' : 'bookmark-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="HomeRooms" component={HomeRoomsScreen} options={{headerShown: false,}}/>
            <Tab.Screen name="Blogs" component={BlogsScreen} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;
