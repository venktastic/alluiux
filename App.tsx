import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useAppContext } from './src/context/AppContext';
import HomeScreen from './src/screens/HomeScreen';

function AppShell() {
  const { currentTheme } = useAppContext();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: currentTheme.dark }]}>
      <StatusBar style="light" />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
