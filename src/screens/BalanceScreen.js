import React from 'react';
import { View } from 'react-native';

import { BALANCE_ACTIVITY_TYPES } from '../utils/constants/types';

import { BasicButton } from '../components/Button';
import { CenteredModal } from '../components/Modal';
import { BasicText } from '../components/Text';
import { TextField } from '../components/Field';

export const BalanceScreen = () => {
  const [inputSum, setInputSum] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [balanceHistory, setBalanceHistory] = React.useState([]);
  const [balanceError, setBalanceError] = React.useState('');
  const [modalVisibility, setModalVisibiltiy] = React.useState(false);

  const balanceHistoryHandler = (type) => {
    if (!inputSum) {
      return;
    }

    if (type === BALANCE_ACTIVITY_TYPES.INCOME) {
      setBalance(balance + Number(inputSum));
    }

    if (type === BALANCE_ACTIVITY_TYPES.EXPENSE) {
      if (balance < Number(inputSum)) {
        setBalanceError('Balance is lesser than sum which you inputted');
        return;
      } else {
        setBalance(balance - Number(inputSum));
      }
    }

    setBalanceHistory([
      ...balanceHistory,
      { id: Date.now(), sum: inputSum, type },
    ]);

    closeModalHandler();
  };

  const closeModalHandler = () => {
    setModalVisibiltiy(false);
    setBalanceError('');
    setInputSum('');
  };

  return (
    <View style={{ padding: 16 }}>
      <BasicText
        styles={{ fontSize: 24 }}
        text={`Balance $${balance}`}
      />
      <BasicButton
        styles={{ marginTop: 8, marginBottom: 16 }}
        text="Update balance"
        onPress={() => setModalVisibiltiy(true)}
      />
      {balanceHistory.map((history) => (
        <BasicText
          key={history.id}
          text={`${history.type}$${history.sum}`}
          styles={{
            fontSize: 20,
            color: history.type === BALANCE_ACTIVITY_TYPES.INCOME ? '#59CE8F' : '#E94560',
          }}
        />
      ))}
      <CenteredModal
        animationType="slide"
        visible={modalVisibility}
        closeModal={closeModalHandler}
      >
        <TextField
          placeholder="Sum"
          keyboardType="numeric"
          onChangeText={setInputSum}
          value={inputSum}
          isError={balanceError !== ''}
          errorText={balanceError}
        />
        <BasicButton
          styles={{ marginTop: 8, marginBottom: 8 }}
          text="Income"
          onPress={() => balanceHistoryHandler(BALANCE_ACTIVITY_TYPES.INCOME)}
        />
        <BasicButton
          text="Expense"
          onPress={() => balanceHistoryHandler(BALANCE_ACTIVITY_TYPES.EXPENSE)}
        />
      </CenteredModal>
    </View>
  );
};
