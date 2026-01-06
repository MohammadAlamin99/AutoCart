import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import { launchCamera, Asset, CameraOptions } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ChevronLeftIcon from '../../components/svg/ChevronLeftIcon';
import PlusIcon from '../../components/svg/PluseIcon';

interface FormData {
  businessName: string;
  address: string;
  contactName: string;
  vatNumber: string;
  dealerLicense: string;
}

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  optionalText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  optionalText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}{' '}
        {optionalText && (
          <Text style={styles.optionalText}>{optionalText}</Text>
        )}
      </Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const CreateAccountScreeen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: 'Ben Autos',
    address: 'Lorem ipsum dolor sit amet consectetur. Urna.',
    contactName: 'Ben',
    vatNumber: 'Ben',
    dealerLicense: 'Ben',
  });
  const navigation = useNavigation();

  const [logo, setLogo] = useState<Asset | null>(null);
  const [background, setBackground] = useState<Asset | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const openCamera = (type: 'logo' | 'bg') => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 1000,
      maxWidth: 1000,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) return;

      if (response.errorCode) {
        Alert.alert('Camera Error', response.errorMessage || 'Unknown error');
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        type === 'logo' ? setLogo(selectedImage) : setBackground(selectedImage);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Create your Trade seller account</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <InputField
          label="Business Name"
          value={formData.businessName}
          onChangeText={txt => handleInputChange('businessName', txt)}
        />

        <InputField
          label="Address"
          value={formData.address}
          onChangeText={txt => handleInputChange('address', txt)}
        />

        <InputField
          label="Contact Person Name"
          value={formData.contactName}
          onChangeText={txt => handleInputChange('contactName', txt)}
        />

        <InputField
          label="VAT Number"
          optionalText="(Recommended)"
          value={formData.vatNumber}
          onChangeText={txt => handleInputChange('vatNumber', txt)}
        />

        <InputField
          label="Dealer License"
          optionalText="(Optional)"
          value={formData.dealerLicense}
          onChangeText={txt => handleInputChange('dealerLicense', txt)}
        />

        {/* Upload Section */}
        <View style={styles.uploadRow}>
          <View style={styles.uploadBoxContainer}>
            <Text style={styles.uploadLabel}>Upload Business Logo</Text>
            <TouchableOpacity
              style={styles.uploadBox}
              onPress={() => openCamera('logo')}
            >
              {logo?.uri ? (
                <Image source={{ uri: logo.uri }} style={styles.previewImage} />
              ) : (
                <View style={styles.uploadIconContainer}>
                  <PlusIcon color="#9CA3AF" />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.uploadBoxContainer}>
            <Text style={styles.uploadLabel}>Upload Background Image</Text>
            <TouchableOpacity
              style={styles.uploadBox}
              onPress={() => openCamera('bg')}
            >
              {background?.uri ? (
                <Image
                  source={{ uri: background.uri }}
                  style={styles.previewImage}
                />
              ) : (
                <View style={styles.uploadIconContainer}>
                  <PlusIcon color="#9CA3AF" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} activeOpacity={0.8}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate('Register' as never)}
          >
            Already have an account? <Text style={styles.loginText}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    marginBottom: 38,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'SourceSans3-Regular',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
    fontWeight: '400',
    fontFamily: 'SourceSans3-Regular',
  },
  optionalText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: '#9CA3AF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 15,
    color: '#374151',
  },
  uploadRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  uploadBoxContainer: {
    width: '50%',
  },
  uploadLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  uploadBox: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
  },
  continueButton: {
    backgroundColor: '#BDEBB8',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'SourceSans3-SemiBold',
  },
  uploadIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  footer: {
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    fontStyle: 'italic',
    fontSize: 14,
  },
  loginText: {
    color: '#07B007',
    fontWeight: '600',
  },
});

export default CreateAccountScreeen;
