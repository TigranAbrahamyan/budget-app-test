import { StyleSheet } from 'react-native';
import { BasicText } from './BasicText';

export const ErrorText = ({ text }) => {
  return (
    <BasicText text={text} styles={styles.text} />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E94560',
  },
});
