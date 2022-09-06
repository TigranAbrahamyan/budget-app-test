import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import { Title } from '../../components/Text';
import { HistoryTable } from './frames';

export const BalanceScreen = () => {
  const balanceState = useSelector((state) => state.balance);

  return (
    <ScrollView style={{ padding: 16 }} keyboardShouldPersistTaps="always">
      <Title text={`Balance - $${balanceState.total.toFixed(2)}`} />
      <HistoryTable history={balanceState.history} />
    </ScrollView>
  );
};
