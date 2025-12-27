import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../components/svg/HomeIcon';
import SearchIcon from '../components/svg/SearchIcon';
import ScanIcon from '../components/svg/ScanIcon';
import MessageScreen from '../screens/MessageScreen';
import ChatIcon from '../components/svg/ChatIcon';
import ProfileIcon from '../components/svg/ProfileICon';
import Story from '../components/svg/Story';
import ScanScreen from '../screens/ScanScreen';
import SearchScreen from '../screens/SearchScreen';

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Scan: undefined;
  Message: undefined;
  Story: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#07B007',
        tabBarInactiveTintColor: '#1F2937',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color = '#07B007', size = 24 }) => (
            <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color = '#1F2937', size = 24 }) => (
            <SearchIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color = '#1F2937', size = 24 }) => (
            <ScanIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color = '#1F2937', size = 24 }) => (
            <ChatIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Story"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color = '#1F2937', size = 24 }) => (
            <Story color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color = '#1F2937', size = 24 }) => (
            <ProfileIcon color={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
