import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CREDIT_ACTIVITY_TYPES } from '../../../utils/constants';
import { BasicText } from '../../../components/Text';

export const CreditTotal = ({ creditHistory }) => {
  return (
    <View style={styles.content}>
      <View style={styles.totalBox}>
        <BasicText
          text={`+$${creditHistory.reduce((acc, history) => acc + (history.type === CREDIT_ACTIVITY_TYPES.TAKE && Number(history.sum)), 0).toFixed(2)}`}
          styles={{ color: '#59CE8F' }}
        />
      </View>
      <View style={{ ...styles.totalBox, alignItems: 'flex-end' }}>
        <BasicText
          text={`-$${creditHistory.reduce((acc, history) => acc + (history.type === CREDIT_ACTIVITY_TYPES.PAY && Number(history.sum)), 0).toFixed(2)}`}
          styles={{ color: '#E94560' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  totalBox: {
    backgroundColor: 'black',
    width: '45%',
    padding: 16,
    borderRadius: 4,
  },
});
