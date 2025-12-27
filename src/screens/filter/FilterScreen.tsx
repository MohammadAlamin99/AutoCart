import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import ChevronLeftIcon from '../../components/svg/ChevronLeftIcon';

const FilterScreen = () => {
  const navigation = useNavigation();

  const [filters, setFilters] = useState({
    category: '',
    minYear: '',
    maxYear: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    country: '',
  });

  const handleClearAll = () => {
    setFilters({
      category: '',
      minYear: '',
      maxYear: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      country: '',
    });
  };

  const handleApply = () => {
    console.log('Applied Filters:', filters);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" /> 
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Filter</Text>

        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Category</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.placeholder}>Select Category</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Year</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.halfInput}>
            <Text style={styles.placeholder}>Min Year</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.halfInput}>
            <Text style={styles.placeholder}>Max Year</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Price</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.halfInput}>
            <Text style={styles.placeholder}>Min Price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.halfInput}>
            <Text style={styles.placeholder}>Max Price</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Location</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.placeholder}>Select Location</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Current Country of Registration</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.placeholder}>
            Select Current Country of Registration
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
