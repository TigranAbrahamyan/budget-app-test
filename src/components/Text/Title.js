import { StyleSheet } from 'react-native';
import { BasicText } from './BasicText';

export const Title = ({ text }) => {
  return (
    <BasicText text={text} styles={styles.text} />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});
