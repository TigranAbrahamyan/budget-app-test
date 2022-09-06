import React from 'react';
import { View } from 'react-native';

import { BALANCE_ACTIVITY_TYPES } from '../../../utils/types';
import { BasicButton } from '../../../components/Button';
import { BasicText } from '../../../components/Text';
import { UpdateBalanceModal } from './UpdateBalanceModal';

export const HistoryTable = ({ history }) => {
  const [activityType, setActivityType] = React.useState('');
  const [modalVisibility, setModalVisibiltiy] = React.useState(false);

  const openModalHandler = (type) => {
    setActivityType(type);
    setModalVisibiltiy(true);
  };

  return (
    <>
      <UpdateBalanceModal
        activityType={activityType}
        modalVisibility={modalVisibility}
        setModalVisibiltiy={setModalVisibiltiy}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
        <View style={{ width: '50%',  height: '100%', marginBottom: 100, borderColor: 'black', borderRightWidth: 2 }}>
          <View>
            <BasicButton
              styles={{ width: 100, marginTop: 8, marginBottom: 8 }}
              text="Income"
              onPress={() => openModalHandler(BALANCE_ACTIVITY_TYPES.INCOME)}
            />
            {history.map((history) => history.type === BALANCE_ACTIVITY_TYPES.INCOME && (
              <BasicText
                key={history.id}
                text={`${history.type}$${history.sum}`}
                styles={{ fontSize: 16, color: '#59CE8F' }}
              />
            ))}
          </View>
          <View style={{ width: '90%', position: 'absolute', bottom: 60, padding: 16, backgroundColor: 'black' }}>
            <BasicText
              text={`+$${history.reduce((acc, n) => acc + (n.type === BALANCE_ACTIVITY_TYPES.INCOME && Number(n.sum)), 0).toFixed(2)}`}
              styles={{ color: '#59CE8F' }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', width: '50%', height: '100%', marginBottom: 100, borderColor: 'black', borderLeftWidth: 2 }}>
          <BasicButton
            styles={{ width: 100, marginTop: 8, marginBottom: 8 }}
            text="Expense"
            onPress={() => openModalHandler(BALANCE_ACTIVITY_TYPES.EXPENSE)}
          />
          {history.map((history) => history.type === BALANCE_ACTIVITY_TYPES.EXPENSE && (
            <BasicText
              key={history.id}
              text={`${history.type}$${history.sum}`}
              styles={{ fontSize: 16, color: '#E94560' }}
            />
          ))}
          <View style={{ alignItems: 'flex-end', width: '90%', position: 'absolute', bottom: 60, padding: 16, backgroundColor: 'black' }}>
            <BasicText
              text={`-$${history.reduce((acc, n) => acc + (n.type === BALANCE_ACTIVITY_TYPES.EXPENSE && Number(n.sum)), 0).toFixed(2)}`}
              styles={{ color: '#E94560' }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
