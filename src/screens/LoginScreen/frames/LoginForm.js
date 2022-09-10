import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { setIsAuth, setUser } from '../../../store/actions/auth';
import { isOnlyLetters } from '../../../utils/validations';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { Title } from '../../../components/Text';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

  const pressLoginHandler = () => {
    if (!isOnlyLetters(name.trim())) {
      setError(true);
      return;
    }

    dispatch(setUser(name.trim()));
    dispatch(setIsAuth(true));
  };

  return (
    <View style={styles.content}>
      <Title text="Login" />
      <TextField
        styles={{ marginVertical: 16 }}
        placeholder="Write your name"
        onChangeText={setName}
        value={name}
        isError={error}
        errorText="Name should contain english letters"
      />
      <BasicButton text="Login" onPress={pressLoginHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
    padding: 16,
    margin: 16,
  },
});
