import { Alert } from 'react-native';

export const basicAlert = ({
  title,
  message,
  okMessage,
  cancelMessage,
  onPressOk = null,
  onPressCancel = null,
  options,
}) => {
  return (
    Alert.alert(
      title,
      message,
      [
        {
          text: okMessage,
          onPress: onPressOk,
        },
        {
          text: cancelMessage,
          onPress: onPressCancel,
        },
      ],
      options,
    )
  );
};
