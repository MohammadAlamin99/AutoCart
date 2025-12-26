import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bgOnboarding.png')}
        style={styles.image}
        resizeMode="cover"
      >
        {/* content */}
        <View style={styles.content}>
          <Text style={styles.title}>Easy way to buy{'\n'}your dream car</Text>

          <Text style={styles.subtitle}>
            By using the car, you can move quickly from one place to another in
            your daily life.
          </Text>
        </View>
        {/* navigation */}
        <View style={styles.bottom}>
          <View />
          <View>
            <View style={styles.dots}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
