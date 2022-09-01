import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthContext } from '../context/AuthContext';

import { BasicButton } from '../components/Button';
import { TextField } from '../components/Field';
import { BasicText } from '../components/Text';

export const LoginScreen = () => {
  const { name, setName, setIsAuth } = React.useContext(AuthContext);
  const [error, setError] = React.useState(false);

  const pressLoginHandler = () => {
    if (name === '') {
      setError(true);
    } else {
      setIsAuth(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <BasicText text="Login" styles={{ fontSize: 24 }} />
        <TextField
          styles={{ marginTop: 16, marginBottom: 16 }}
          placeholder="Write your name"
          onChangeText={setName}
          value={name}
          isError={error}
          errorText="Name is required"
        />
        <BasicButton text="Login" onPress={pressLoginHandler} />
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
