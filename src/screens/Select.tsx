// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';

// const SelectAccountTypeScreen = ({ navigation }) => {
//   const [selectedType, setSelectedType] = useState(null);

//   const onContinue = () => {
//     if (selectedType === 'trade') {
//       navigation.navigate('TradeSellerForm');
//     } else {
//       navigation.navigate('PrivateSellerForm');
//     }
//   };

//   const AccountCard = ({ type, title, subtitle }) => {
//     const isActive = selectedType === type;

//     return (
//       <>
//         <Pressable
//           style={[styles.card, isActive && styles.cardActive]}
//           onPress={() => setSelectedType(type)}
//         >
//           <View>
//             <Text style={styles.cardTitle}>{title}</Text>
//             <Text style={styles.cardSubtitle}>{subtitle}</Text>
//           </View>

//           <View style={styles.radioOuter}>
//             {isActive && <View style={styles.radioInner} />}
//           </View>
//         </Pressable>
//       </>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>AutoCart</Text>
//         <Text style={styles.subtitle}>Discover cars with confidence</Text>
//       </View>

//       <Text style={styles.title}>Select Your Account Type</Text>

//       <AccountCard
//         type="trade"
//         title="Trade Seller"
//         subtitle="Requires approval"
//       />

//       <AccountCard
//         type="private"
//         title="Private Seller"
//         subtitle="No approval needed"
//       />

//       {/* Continue Button */}
//       <TouchableOpacity
//         style={[styles.button, !selectedType && styles.buttonDisabled]}
//         disabled={!selectedType}
//         onPress={onContinue}
//       >
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default SelectAccountTypeScreen;

// /* ================== STYLES ================== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 20,
//   },

//   header: {
//     alignItems: 'center',
//     marginTop: 12,
//     marginBottom: 32,
//   },

//   logo: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#2E7D32',
//   },

//   subtitle: {
//     fontSize: 12,
//     color: '#8E8E8E',
//     marginTop: 4,
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 20,
//   },

//   card: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderRadius: 12,
//     backgroundColor: '#F6F6F6',
//     marginBottom: 16,
//   },

//   cardActive: {
//     borderWidth: 1,
//     borderColor: '#4CAF50',
//   },

//   cardTitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#000',
//   },

//   cardSubtitle: {
//     fontSize: 12,
//     color: '#7A7A7A',
//     marginTop: 4,
//   },

//   radioOuter: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     borderWidth: 2,
//     borderColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#4CAF50',
//   },

//   button: {
//     marginTop: 'auto',
//     marginBottom: 24,
//     backgroundColor: '#A5E6A1',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//   },

//   buttonDisabled: {
//     backgroundColor: '#DADADA',
//   },

//   buttonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
// });
