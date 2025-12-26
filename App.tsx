import { View } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <OnboardingScreen />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
