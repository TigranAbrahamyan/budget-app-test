import { useSelector } from 'react-redux';
import { View } from 'react-native';

import { Title } from '../../components/Text';
import { CreditHistoryTable, CreditTotal } from './frames';

export const CreditScreen = () => {
  const { total, history } = useSelector((state) => state.credit);

  return (
    <View style={{ padding: 16, flex: 1 }} keyboardShouldPersistTaps="always">
      <Title text={`Your credit - $${total.toFixed(2)}`} />
      <CreditHistoryTable creditHistory={history} creditTotal={total} />
      <CreditTotal creditHistory={history} />
    </View>
  );
};
