import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
const APP_BAR_COLOR = '#f3f4f5ff';
const SCREEN_BG_COLOR = '#ffffff';

const RegScanScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: SCREEN_BG_COLOR }}>
      {/* STATUS BAR — app bar only */}
      <StatusBar
        backgroundColor={APP_BAR_COLOR}
        barStyle="dark-content"
        translucent={false}
      />

      {/* APP BAR */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: APP_BAR_COLOR }}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Reg Scanner</Text>
        </View>
      </SafeAreaView>

      {/* SCREEN CONTENT */}
      <Image
        source={require('../../assets/images/scanner.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.paragraph}>
        <Text style={{ textAlign: 'center', color: '#9CA3AF' }}>
          This option allows you to check your vehicle details before purchasing
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondayButton}>
          <Text style={styles.secondayButtonText}>Place Ad Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegScanScreen;
