import { useSelector } from 'react-redux';
import { View } from 'react-native';

import { Title } from '../../components/Text';
import { ExpenseStatistics } from './frames';

export const HomeScreen = () => {
  const authState = useSelector((state) => state.auth);

  return (
    <View style={{ padding: 16 }}>
      <Title text={`Hello, ${authState.name}`} />
      <ExpenseStatistics />
    </View>
  );
};
