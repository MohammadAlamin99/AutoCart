import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import PlusIcon from '../../components/svg/PluseIcon';
import FilterIcon from '../../components/svg/FilterIcon';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <View style={styles.header}>
        <View>
          <Image
            source={require('../../assets/images/logoHeader.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.smallAddButton}
            onPress={() => navigation.navigate('AddPlaceAdScreen' as never)}
          >
            <Text style={styles.smallAddButtonText}>Place Ad</Text>
            <PlusIcon width={16} height={16} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterIconButton}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Main Content Section --- */}
      <View style={styles.content}>
        <Text style={styles.mainHeading}>
          Post your first ad to kick off your selling journey.
        </Text>

        <Text style={styles.subHeading}>
          The sooner you start, the faster you sell.
        </Text>

        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Post Your First Ad</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
