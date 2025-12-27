import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker';
import { styles } from './style';

const APP_BAR_COLOR = '#F9FAFB';
const SCREEN_BG_COLOR = '#F9FAFB';

const RegScanScreen = () => {
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert('Camera Error', response.errorMessage || 'Unknown error');
          return;
        }
        const imageUri = response.assets?.[0]?.uri;
        console.log('Captured image URI:', imageUri);
      },
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: SCREEN_BG_COLOR }}>
      {/* STATUS BAR */}
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

      {/* CONTENT */}
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
        <TouchableOpacity style={styles.button} onPress={openCamera}>
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
