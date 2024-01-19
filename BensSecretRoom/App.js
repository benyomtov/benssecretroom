import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './src/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <LandingPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
