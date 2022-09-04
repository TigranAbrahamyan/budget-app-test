import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Title } from '../../components/Text';

export const HomeScreen = () => {
  const authState = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <Title text={`Hello, ${authState.name}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
