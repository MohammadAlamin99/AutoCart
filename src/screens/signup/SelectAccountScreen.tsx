import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './selectStyle';
import AppBar from '../../components/AppBar';
import { useNavigation } from '@react-navigation/native';

const SelectAccountScreen = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigation = useNavigation();

  const isButtonEnabled = selectedType !== null;

  return (
    <View style={styles.container}>
      <AppBar />
      <Text style={styles.title}>Select Your Account Type</Text>

      {/* Trade Seller */}
      <TouchableOpacity
        style={[styles.card, selectedType === 'trade' && styles.cardSelected]}
        onPress={() => setSelectedType('trade')}
        activeOpacity={0.8}
      >
        {/* Header */}
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderWrapper}>
            <Image
              source={require('../../assets/images/Frame.png')}
              style={styles.frame}
            />
            <View>
              <Text style={styles.cardTitle}>Trade Seller</Text>
              <Text style={styles.cardSub}>Requires approval</Text>
            </View>
          </View>

          <View style={styles.radioOuter}>
            {selectedType === 'trade' && <View style={styles.radioInner} />}
          </View>
        </View>

        {/* Expanded Content */}
        {selectedType === 'trade' && (
          <View style={styles.expandedBox}>
            <Text style={styles.expandedItem}>
              🧾 Designed for Dealerships & Garages
            </Text>
            <Text style={styles.expandedItem}>
              ✔ Business Verification Required
            </Text>
            <Text style={styles.expandedItem}>🚗 Unlimited Listings</Text>
            <Text style={styles.expandedItem}>
              🛡 Mandatory Finance Price Input
            </Text>
            <Text style={styles.expandedItem}>
              🔒 Verification Tick for Trust
            </Text>
            <Text style={styles.expandedItem}>🔗 Social Media Integration</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Private Seller */}
      <TouchableOpacity
        style={[styles.card, selectedType === 'private' && styles.cardSelected]}
        onPress={() => setSelectedType('private')}
        activeOpacity={0.8}
      >
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderWrapper}>
            <Image
              source={require('../../assets/images/Frame.png')}
              style={styles.frame}
            />
            <View>
              <Text style={styles.cardTitle}>Private Seller</Text>
              <Text style={styles.cardSub}>No approval needed </Text>
            </View>
          </View>

          <View style={styles.radioOuter}>
            {selectedType === 'private' && <View style={styles.radioInner} />}
          </View>
        </View>
      </TouchableOpacity>

      {/* Bottom Button */}
      <TouchableOpacity
        style={[styles.button, !isButtonEnabled && styles.buttonDisabled]}
        disabled={!isButtonEnabled}
        onPress={() => {
          navigation.navigate('createAccount');
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectAccountScreen;
