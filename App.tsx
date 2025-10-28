import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import AppNavigator from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
        <StatusBar style="light" backgroundColor="#121212" />
      </SafeAreaProvider>
    </Provider>
  );
}
