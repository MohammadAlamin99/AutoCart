import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});
export default ProfileScreen;
