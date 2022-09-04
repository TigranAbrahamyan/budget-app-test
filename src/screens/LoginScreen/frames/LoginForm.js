import React from 'react';
import { useDispatch } from 'react-redux';

import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { setIsAuth, setUser } from '../../../store/actions/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

  const pressLoginHandler = () => {
    if (!name) {
      setError(true);
    } else {
      dispatch(setUser(name));
      dispatch(setIsAuth(true));
    }
  };

  return (
    <>
      <TextField
        styles={{ marginTop: 16, marginBottom: 16 }}
        placeholder="Write your name"
        onChangeText={setName}
        value={name}
        isError={error}
        errorText="Name is required"
      />
      <BasicButton text="Login" onPress={pressLoginHandler} />
    </>
  );
};
