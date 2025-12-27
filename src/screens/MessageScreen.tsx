import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Message Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

export default MessageScreen;
