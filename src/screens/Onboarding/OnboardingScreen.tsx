import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

const onboardingData = [
  {
    id: 1,
    title: 'Easy way to buy\nyour dream car',
    subtitle:
      'By using the car, you can move quickly from one place to another in your daily life.',
    image: require('../../assets/images/bgOnboarding.png'),
  },
  {
    id: 2,
    title: 'Find the best car\nfor your lifestyle',
    subtitle:
      'We provide various types of cars from various famous brands in the world.',
    image: require('../../assets/images/bgOnboarding.png'),
  },
  {
    id: 3,
    title: 'Safe and secure\npayment method',
    subtitle:
      'Enjoy the convenience of transactions with various payment methods available.',
    image: require('../../assets/images/bgOnboarding.png'),
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const OnboardingScreen = ({ navigation }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('account');
    }
  };

  const currentData = onboardingData[currentIndex];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={currentData.image}
        style={styles.image}
        resizeMode="cover"
      >
        {/* content */}
        <View style={styles.content}>
          <Text style={styles.title}>{currentData.title}</Text>
          <Text style={styles.subtitle}>{currentData.subtitle}</Text>
        </View>

        {/* navigation */}
        <View style={styles.bottom}>
          <View />

          {/* Dots Indicator */}
          <View>
            <View style={styles.dots}>
              {onboardingData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === currentIndex && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>

          <View>
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
