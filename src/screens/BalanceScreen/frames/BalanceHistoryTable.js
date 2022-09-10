import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { BALANCE_ACTIVITY_TYPES } from '../../../utils/constants';
import { BasicButton } from '../../../components/Button';
import { BasicText } from '../../../components/Text';
import { BalanceUpdateModal } from './BalanceUpdateModal';

export const BalanceHistoryTable = ({ balanceHistory, balanceTotal, navigateToCredit }) => {
  const [activityType, setActivityType] = React.useState('');
  const [modalVisibility, setModalVisibiltiy] = React.useState(false);

  const openModalHandler = (type) => {
    setActivityType(type);
    setModalVisibiltiy(true);
  };

  return (
    <>
      <BalanceUpdateModal
        activityType={activityType}
        modalVisibility={modalVisibility}
        setModalVisibiltiy={setModalVisibiltiy}
        balanceTotal={balanceTotal}
        navigateToCredit={navigateToCredit}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <BasicButton
            styles={styles.button}
            text="Income"
            onPress={() => openModalHandler(BALANCE_ACTIVITY_TYPES.INCOME)}
          />
          {balanceHistory.map((history) => history.type === BALANCE_ACTIVITY_TYPES.INCOME && (
            <BasicText
              key={history.id}
              text={`+$${history.sum.toFixed(2)}`}
              styles={{ color: '#59CE8F' }}
            />
          ))}
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <BasicButton
            styles={{ ...styles.button, backgroundColor: '#E94560' }}
            text="Expense"
            onPress={() => openModalHandler(BALANCE_ACTIVITY_TYPES.EXPENSE)}
          />
          {balanceHistory.map((history) => history.type === BALANCE_ACTIVITY_TYPES.EXPENSE && (
            <BasicText
              key={history.id}
              text={`-$${history.sum.toFixed(2)}`}
              styles={{ color: '#E94560' }}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    marginTop: 8,
    marginBottom: 8,
  },
});
