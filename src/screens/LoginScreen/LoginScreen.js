import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginForm } from './frames';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F7FA',
  },
});
