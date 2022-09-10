import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CREDIT_ACTIVITY_TYPES } from '../../../utils/constants';
import { BasicButton } from '../../../components/Button';
import { BasicText } from '../../../components/Text';
import { CreditUpdateModal } from './CreditUpdateModal';

export const CreditHistoryTable = ({ creditHistory, creditTotal }) => {
  const [activityType, setActivityType] = React.useState('');
  const [modalVisibility, setModalVisibiltiy] = React.useState(false);

  const openModalHandler = (type) => {
    setActivityType(type);
    setModalVisibiltiy(true);
  };

  return (
    <>
      <CreditUpdateModal
        activityType={activityType}
        modalVisibility={modalVisibility}
        setModalVisibiltiy={setModalVisibiltiy}
        creditTotal={creditTotal}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <BasicButton
            styles={styles.button}
            text="Take"
            onPress={() => openModalHandler(CREDIT_ACTIVITY_TYPES.TAKE)}
          />
          {creditHistory.map((history) => history.type === CREDIT_ACTIVITY_TYPES.TAKE && (
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
            text="Pay"
            onPress={() => openModalHandler(CREDIT_ACTIVITY_TYPES.PAY)}
          />
          {creditHistory.map((history) => history.type === CREDIT_ACTIVITY_TYPES.PAY && (
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
