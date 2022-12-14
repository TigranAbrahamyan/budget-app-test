import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import { ROUTE_NAMES } from '../../utils/routes/names';
import { Title } from '../../components/Text';
import { BalanceHistoryList, BalanceTotal } from './frames';

export const BalanceScreen = ({ navigation }) => {
  const { total, history } = useSelector((state) => state.balance);

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <Title text={`Your balance: $${total.toFixed(2)}`} />
      <BalanceHistoryList
        balanceHistory={history}
        balanceTotal={total}
        navigateToCredit={() => navigation.navigate(ROUTE_NAMES.CREDIT)}
      />
      <BalanceTotal balanceHistory={history} />
    </View>
  );
};
