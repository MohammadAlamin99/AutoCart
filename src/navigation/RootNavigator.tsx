import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
  Onboarding: undefined;
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;


