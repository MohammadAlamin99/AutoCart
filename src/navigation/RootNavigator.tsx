import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import BottomTabs from './BottomTabs';
import AddPlaceAdScreen from '../screens/ad/AddPlaceAdScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  BottomTabs: undefined;
  AddPlaceAdScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
 
const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddPlaceAdScreen" component={AddPlaceAdScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
