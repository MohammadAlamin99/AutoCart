import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>AutoCart</Text>
          <Text style={styles.subtitle}>Discover new cars with ease</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Create Account</Text>

        {/* Inputs */}
        <View style={styles.form}>
          <Input icon="logo-instagram" placeholder="Instagram link" />

          <Input icon="logo-facebook" placeholder="Facebook link" />

          <Input icon="globe-outline" placeholder="Website link" />

          <PasswordInput
            placeholder="Create password"
            visible={passwordVisible}
            onToggle={() => setPasswordVisible(!passwordVisible)}
          />

          <PasswordInput
            placeholder="Confirm password"
            visible={confirmVisible}
            onToggle={() => setConfirmVisible(!confirmVisible)}
          />
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            (navigation as any).navigate('BottomTabs');
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* ---------- Reusable Components ---------- */

const Input = ({
  icon,
  placeholder,
}: {
  icon: string;
  placeholder: string;
}) => (
  <View style={styles.inputContainer}>
    <Icon name={icon} size={20} color="#9CA3AF" />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
    />
  </View>
);

const PasswordInput = ({
  placeholder,
  visible,
  onToggle,
}: {
  placeholder: string;
  visible: boolean;
  onToggle: () => void;
}) => (
  <View style={styles.inputContainer}>
    <Icon name="lock-closed-outline" size={20} color="#9CA3AF" />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      secureTextEntry={!visible}
    />
    <TouchableOpacity onPress={onToggle}>
      <Icon
        name={visible ? 'eye-off-outline' : 'eye-outline'}
        size={20}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#16A34A',
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#111827',
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#111827',
  },
  button: {
    backgroundColor: '#16A34A',
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#6B7280',
  },
  loginText: {
    color: '#16A34A',
    fontWeight: '600',
  },
});

export default CreateAccountScreen;
