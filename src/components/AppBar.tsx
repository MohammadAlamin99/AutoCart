import { Image, StatusBar, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export class AppBar extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
        <View style={styles.header}>
          <View>
            <Image
              source={require('../assets/images/logoHeader.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 42,
  },
  logo: {
    width: 130,
    height: 40,
    objectFit: 'contain',
  },
});

export default AppBar;
