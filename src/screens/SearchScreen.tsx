import { Text, View } from 'react-native';
import React, { Component } from 'react';

export class SearchScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, color: '#000' }}>Search Screen</Text>
      </View>
    );
  }
}

export default SearchScreen;
