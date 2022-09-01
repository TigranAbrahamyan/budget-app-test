import { StyleSheet, View, TextInput } from 'react-native';

import { ErrorText } from '../Text/ErrorText';

export const TextField = ({
  keyboardType = 'default',
  placeholder = '',
  onChangeText,
  value,
  isError,
  errorText,
  styles: propsStyles,
}) => {
  return (
    <View style={propsStyles}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
      {isError && <ErrorText text={errorText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2B4865',
  },
});
