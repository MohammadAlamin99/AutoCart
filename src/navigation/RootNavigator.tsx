import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import BottomTabs from './BottomTabs';
import AddPlaceAdScreen from '../screens/ad/AddPlaceAdScreen';
import FilterScreen from '../screens/filter/FilterScreen';
import SelectAccountScreen from '../screens/signup/SelectAccountScreen';
import CreateAccountScreeen from '../screens/signup/CreateAccountScreeen';
import RegistrationScreen from '../screens/signup/RegistrationScreen';
import SplashScreen from '../screens/splash/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  BottomTabs: undefined;
  AddPlaceAdScreen: undefined;
  FilterScreen: undefined;
  account: undefined;
  createAccount: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="AddPlaceAdScreen" component={AddPlaceAdScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="account" component={SelectAccountScreen} />
      <Stack.Screen name="createAccount" component={CreateAccountScreeen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
