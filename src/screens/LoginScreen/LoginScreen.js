import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from '../../components/Text';
import { LoginForm } from './frames';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Title text="Login" />
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F7FA',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
    padding: 16,
    margin: 16,
  },
});
