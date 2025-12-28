// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// const CreateAccountScreen: React.FC = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmVisible, setConfirmVisible] = useState(false);
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.logo}>AutoCart</Text>
//           <Text style={styles.subtitle}>Discover new cars with ease</Text>
//         </View>

//         {/* Title */}
//         <Text style={styles.title}>Create Account</Text>

//         {/* Inputs */}
//         <View style={styles.form}>
//           <Input icon="logo-instagram" placeholder="Instagram link" />

//           <Input icon="logo-facebook" placeholder="Facebook link" />

//           <Input icon="globe-outline" placeholder="Website link" />

//           <PasswordInput
//             placeholder="Create password"
//             visible={passwordVisible}
//             onToggle={() => setPasswordVisible(!passwordVisible)}
//           />

//           <PasswordInput
//             placeholder="Confirm password"
//             visible={confirmVisible}
//             onToggle={() => setConfirmVisible(!confirmVisible)}
//           />
//         </View>

//         {/* CTA */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             (navigation as any).navigate('BottomTabs');
//           }}
//         >
//           <Text style={styles.buttonText}>Create Account</Text>
//         </TouchableOpacity>

//         {/* Footer */}
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>Already have an account?</Text>
//           <TouchableOpacity>
//             <Text style={styles.loginText}> Login</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// /* ---------- Reusable Components ---------- */

// const Input = ({
//   icon,
//   placeholder,
// }: {
//   icon: string;
//   placeholder: string;
// }) => (
//   <View style={styles.inputContainer}>
//     <Icon name={icon} size={20} color="#9CA3AF" />
//     <TextInput
//       style={styles.input}
//       placeholder={placeholder}
//       placeholderTextColor="#9CA3AF"
//     />
//   </View>
// );

// const PasswordInput = ({
//   placeholder,
//   visible,
//   onToggle,
// }: {
//   placeholder: string;
//   visible: boolean;
//   onToggle: () => void;
// }) => (
//   <View style={styles.inputContainer}>
//     <Icon name="lock-closed-outline" size={20} color="#9CA3AF" />
//     <TextInput
//       style={styles.input}
//       placeholder={placeholder}
//       placeholderTextColor="#9CA3AF"
//       secureTextEntry={!visible}
//     />
//     <TouchableOpacity onPress={onToggle}>
//       <Icon
//         name={visible ? 'eye-off-outline' : 'eye-outline'}
//         size={20}
//         color="#9CA3AF"
//       />
//     </TouchableOpacity>
//   </View>
// );

// /* ---------- Styles ---------- */

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     paddingHorizontal: 24,
//     paddingBottom: 40,
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#16A34A',
//   },
//   subtitle: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginTop: 4,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginTop: 32,
//     marginBottom: 24,
//     textAlign: 'center',
//     color: '#111827',
//   },
//   form: {
//     gap: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 12,
//     paddingHorizontal: 14,
//     height: 52,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 15,
//     color: '#111827',
//   },
//   button: {
//     backgroundColor: '#16A34A',
//     height: 54,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 32,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#6B7280',
//   },
//   loginText: {
//     color: '#16A34A',
//     fontWeight: '600',
//   },
// });

// export default CreateAccountScreen;
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
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
      <StatusBar barStyle="dark-content" />

      {/* --- FIXED HEADER SECTION --- */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <ChevronLeft size={28} color="#000" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
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
    // Subtle shadow for when content scrolls under it (iOS)
    zIndex: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 40,
    objectFit: 'contain',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#07B007',
  },
  buttonText: {},
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
