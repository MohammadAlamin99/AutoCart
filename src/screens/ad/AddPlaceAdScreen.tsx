import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChevronLeftIcon from '../../components/svg/ChevronLeftIcon';
import ChevronDownIcon from '../../components/svg/ChevronDownIcon';
import PlusIcon from '../../components/svg/PluseIcon';
import { Check } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const PlaceAdScreen: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const handleApply = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={handleApply}>
          <ChevronLeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Place Ad</Text>
        <TouchableOpacity>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Category Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={styles.placeholderText}>Select Category</Text>
            <ChevronDownIcon />
          </TouchableOpacity>
        </View>

        {/* Upload Images Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Upload Images</Text>
          <Text style={styles.subLabel}>You can upload up to 20 images</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <View style={styles.plusCircle}>
              <PlusIcon color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Upload Story Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Upload Story</Text>
          <Text style={styles.subLabel}>
            You can upload up to 5 Images or videos for story
          </Text>
          <TouchableOpacity style={styles.uploadBox}>
            <View style={styles.plusCircle}>
              <PlusIcon color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.previewStoryButton}>
          <Text style={styles.previewStoryText}>Preview Story</Text>
        </TouchableOpacity>

        {/* Phone Number Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Input your Phone number"
            placeholderTextColor="#A0AEC0"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Location Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Location"
            placeholderTextColor="#A0AEC0"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* Price Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price</Text>
          <View style={styles.priceRow}>
            <TouchableOpacity style={styles.currencySelector}>
              <Text style={styles.currencyText}>€</Text>
              <ChevronDownIcon color="#9CA3AF" width={10} height={10} />
            </TouchableOpacity>
            <TextInput
              style={[styles.textInput, { flex: 1, marginLeft: 10 }]}
              placeholder="Amount"
              placeholderTextColor="#A0AEC0"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Write Description"
            placeholderTextColor="#A0AEC0"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Subscription & Billing Section */}
        <View style={styles.subscriptionSection}>
          <Text style={styles.label}>Subscription & Billing</Text>
          <View style={styles.subscriptionCard}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.planName}>Basic Plan</Text>
                <Text style={styles.planPrice}>$20/month</Text>
              </View>
              <View style={styles.currentPlanBadge}>
                <Text style={styles.currentPlanText}>Current Plan</Text>
              </View>
            </View>

            <View style={styles.featureRow}>
              <View style={styles.checkContainer}>
                <Check width={16} height={16} color="#4B5563" />
              </View>
              <Text style={styles.featureText}>5 Ads, Standard Support</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.usageHeader}>
              <Text style={styles.usageLabel}>USAGE LIMITS</Text>
              <Text style={styles.usageCount}>
                You have{' '}
                <Text style={{ fontWeight: 'bold' }}>3 ads left out of 5</Text>
              </Text>
            </View>

            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '60%' }]} />
            </View>

            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade Plan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Buttons */}
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText}>Publish Ad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.previewAdButton}>
          <Text style={styles.previewAdText}>Preview Ad</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E2E8F0',
  },
  headerIcon: {
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  resetText: {
    fontSize: 14,
    color: '#DC2626',
    fontWeight: '400',
  },
  scrollContent: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  subLabel: {
    fontSize: 13,
    color: '#A0AEC0',
    marginBottom: 10,
  },
  dropdownInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  placeholderText: {
    color: '#A0AEC0',
    fontSize: 15,
  },
  uploadBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  plusCircle: {
    width: 20,
    height: 20,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewStoryButton: {
    borderWidth: 1,
    borderColor: '#07B007',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 14,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewStoryText: {
    color: '#07B007',
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    fontSize: 15,
    color: '#2D3748',
  },
  priceRow: {
    flexDirection: 'row',
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    width: 70,
    height: 50,
  },
  currencyText: {
    marginRight: 4,
    color: '#4A5568',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  subscriptionSection: {
    marginTop: 10,
    marginBottom: 24,
  },
  subscriptionCard: {
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  planName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  planPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00C853',
    marginTop: 4,
  },
  currentPlanBadge: {
    backgroundColor: '#EBF4FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  currentPlanText: {
    color: '#3182CE',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    marginLeft: 8,
    color: '#4A5568',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 16,
  },
  usageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  usageLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4A5568',
  },
  usageCount: {
    fontSize: 11,
    color: '#00C853',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00C853',
  },
  upgradeButton: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upgradeButtonText: {
    color: '#07B007',
    fontWeight: '600',
    fontSize: 16,
  },
  publishButton: {
    backgroundColor: '#00C853',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  publishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewAdButton: {
    borderWidth: 1,
    borderColor: '#00C853',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewAdText: {
    color: '#00C853',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlaceAdScreen;
