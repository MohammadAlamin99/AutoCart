import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

// Standard icons - install via: npm install lucide-react-native
import { ChevronLeft, Eye, EyeOff } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* --- FIXED HEADER SECTION --- */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <ChevronLeft size={28} color="#000" />
        </TouchableOpacity>

        <View>
          <Image
            source={require('../../assets/images/logoHeader.png')}
            style={styles.logo}
          />
        </View>

        {/* Empty view to balance the flexbox layout */}
        <View style={{ width: 40 }} />
      </View>

      {/* --- SCROLLABLE CONTENT --- */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          style={styles.title}
          activeOpacity={0.7}
          onPress={() => {
            (navigation as any).navigate('BottomTabs');
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <InputField
            label="Instagram Link"
            placeholder="Paste your Link here"
          />
          <InputField
            label="Facebook Link"
            placeholder="Paste your Link here"
          />
          <InputField label="Website Link" placeholder="Paste your Link here" />

          <InputField
            label="Create Password"
            placeholder="************"
            isPassword={true}
          />
          <InputField
            label="Confirm Password"
            placeholder="************"
            isPassword={true}
          />
        </View>

        <TouchableOpacity
          style={styles.createButton}
          activeOpacity={0.8}
          onPress={() => {
            (navigation as any).navigate('BottomTabs');
          }}
        >
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Reusable Input Component with TS Interface
 */
interface InputProps {
  label: string;
  placeholder: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputProps> = ({
  label,
  placeholder,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(!isPassword);

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#C0C0C0"
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize="none"
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={20} color="#B0B0B0" />
            ) : (
              <Eye size={20} color="#B0B0B0" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Style for the Fixed Header
  fixedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  logo: {
    width: 130,
    height: 40,
    objectFit: 'contain',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#07B007',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'SourceSans3-Regular',
    textAlign: 'center',
  },
  logoSubtitle: {
    fontSize: 6.5,
    letterSpacing: 0.5,
    color: '#07B007',
    fontWeight: '600',
    marginTop: -2,
  },
  scrollContent: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 35,
    color: '#000',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#BDBDBD',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    height: 52,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  createButton: {
    backgroundColor: '#07B007',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerText: {
    color: '#BDBDBD',
    fontSize: 14,
  },
  loginText: {
    color: '#07B007',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default CreateAccountScreen;
