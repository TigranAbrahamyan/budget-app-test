import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BasicText } from '../components/Text';

import { AuthContext } from '../context/AuthContext';

export const HomeScreen = () => {
  const { name } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>
        <BasicText text="Hello," styles={{ fontSize: 24 }} />&nbsp;
        <BasicText text={name} styles={{ fontWeight: '700', fontSize: 24 }} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F7FA',
  },
});
