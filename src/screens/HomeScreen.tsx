import { Text, View } from 'react-native';
import React, { Component } from 'react';

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 24,
            color: '#000',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Home Screen
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
