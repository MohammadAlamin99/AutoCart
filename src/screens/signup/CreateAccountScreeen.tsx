import { useNavigation } from '@react-navigation/native';
import React, {useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  launchCamera,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';

/* =======================
   MAIN SCREEN
======================= */

const CreateAccountScreeen: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [vat, setVat] = useState<string>('');
  const [license, setLicense] = useState<string>('');

  const [logo, setLogo] = useState<Asset | null>(null);
  const [background, setBackground] = useState<Asset | null>(null);
  const navigation = useNavigation();

  const openCamera = async (
    setImage: React.Dispatch<React.SetStateAction<Asset | null>>,
  ): Promise<void> => {
    const result: ImagePickerResponse = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      quality: 0.8,
      saveToPhotos: true,
    });

    if (!result.didCancel && result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create your Trade seller account</Text>

      <Input
        label="Business Name"
        value={businessName}
        onChange={setBusinessName}
      />
      <Input label="Address" value={address} onChange={setAddress} multiline />
      <Input
        label="Contact Person Name"
        value={contactName}
        onChange={setContactName}
      />
      <Input label="VAT Number (Recommended)" value={vat} onChange={setVat} />
      <Input
        label="Dealer License (Optional)"
        value={license}
        onChange={setLicense}
      />

      <View style={styles.imageRow}>
        <ImagePickerBox
          label="Upload Business Logo"
          image={logo}
          onPress={() => openCamera(setLogo)}
        />
        <ImagePickerBox
          label="Upload Background Image"
          image={background}
          onPress={() => openCamera(setBackground)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          (navigation as any).navigate('Register');
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.login}>Login</Text>
      </Text>
    </ScrollView>
  );
};

/* =======================
   INPUT COMPONENT
======================= */

type InputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  multiline?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  multiline = false,
}) => (
  <View style={styles.inputWrap}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      multiline={multiline}
      style={[styles.input, multiline && styles.textArea]}
    />
  </View>
);

/* =======================
   IMAGE PICKER COMPONENT
======================= */

type ImagePickerBoxProps = {
  label: string;
  image: Asset | null;
  onPress: () => void;
};

const ImagePickerBox: React.FC<ImagePickerBoxProps> = ({
  label,
  image,
  onPress,
}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity style={styles.imageBox} onPress={onPress}>
      {image?.uri ? (
        <Image source={{ uri: image.uri }} style={styles.image} />
      ) : (
        <Text style={styles.plus}>＋</Text>
      )}
    </TouchableOpacity>
  </View>
);

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputWrap: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imageBox: {
    width: 150,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  plus: {
    fontSize: 28,
    color: '#AAAAAA',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  button: {
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 14,
    color: '#888888',
  },
  login: {
    color: '#3CB371',
    fontWeight: '600',
  },
});

export default CreateAccountScreeen;
