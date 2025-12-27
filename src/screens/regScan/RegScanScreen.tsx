import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

const RegScanScreen = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Reg Scanner</Text>
        </View>
      </SafeAreaView>
      {/* image */}
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
