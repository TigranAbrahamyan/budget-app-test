import { StyleSheet, Pressable } from 'react-native';
import { BasicText } from '../Text/BasicText';

export const BasicButton = ({
  text,
  onPress,
  styles: propsStyles,
}) => {
  return (
    <Pressable style={[styles.button, propsStyles]} onPress={onPress}>
      <BasicText text={text} styles={styles.textStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#59CE8F',
    padding: 8,
    borderRadius: 4,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
