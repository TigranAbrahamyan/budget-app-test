import { StyleSheet, Text } from 'react-native';

export const BasicText = ({
  text,
  styles: propsStyles,
}) => {
  return (
    <Text style={[styles.text, propsStyles]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
});
