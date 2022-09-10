import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { BALANCE_ACTIVITY_TYPES, BALANCE_EXPENSE_CATEGORIES } from '../../../utils/constants';
import { BasicText, Title } from '../../../components/Text';

export const ExpenseStatistics = () => {
  const balanceState = useSelector((state) => state.balance);

  const totalExpenses = balanceState.history.reduce((acc, history) => acc + (history.type === BALANCE_ACTIVITY_TYPES.EXPENSE && Number(history.sum)), 0);

  const totalCategoryExpense = (category) => {
    return balanceState.history.reduce((acc, history) => acc + (category === history.expenseCategory && Number(history.sum)), 0);
  };

  const percentageOfExpenseCategory = (category) => {
    return (totalCategoryExpense(category) / totalExpenses * 100) || 0;
  };

  return (
    <View style={styles.content}>
      <Title text={`Your total expenses: -$${totalExpenses.toFixed(2)}`} />
      {BALANCE_EXPENSE_CATEGORIES.map((category) => (
        <View
          key={category.key}
          style={{ flexDirection: 'row', marginVertical: 3 }}
        >
          <BasicText
            text={`${category.value}: `}
          />
          <BasicText
            styles={{ fontWeight: '700' }}
            text={`${percentageOfExpenseCategory(category.key).toFixed(2)}% ($${totalCategoryExpense(category.key).toFixed(2)})`}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
    padding: 16,
    marginVertical: 8,
  },
});
