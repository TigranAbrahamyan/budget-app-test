import React from 'react';
import { useDispatch } from 'react-redux';
import SelectList from 'react-native-dropdown-select-list';

import { updateBalance } from '../../../store/actions/balance';
import { isDecimal } from '../../../utils/validations';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { CenteredModal } from '../../../components/Modal';
import { basicAlert } from '../../../components/Alert';
import { ErrorText } from '../../../components/Text';
import {
  BALANCE_ACTIVITY_TYPES,
  BALANCE_EXPENSE_CATEGORIES,
  EXPENSE_CREDIT_CATEGORY_KEY,
} from '../../../utils/constants';

export const BalanceUpdateModal = ({
  activityType,
  modalVisibility,
  setModalVisibiltiy,
  balanceTotal,
  navigateToCredit,
}) => {
  const dispatch = useDispatch();
  const [inputSum, setInputSum] = React.useState('');
  const [invalidInputSum, setInvalidInputSum] = React.useState(false);
  const [expenseCategory, setExpenseCategory] = React.useState('');
  const [invalidExpenseCategory, setInvalidExpenseCategory] = React.useState(false);

  const updateBalanceHandler = () => {
    if (!isDecimal(inputSum)) {
      setInvalidInputSum(true);
      return;
    }

    if (activityType === BALANCE_ACTIVITY_TYPES.EXPENSE && !expenseCategory) {
      setInvalidExpenseCategory(true);
      return;
    }

    if (activityType === BALANCE_ACTIVITY_TYPES.EXPENSE && Number(inputSum) > balanceTotal) {
      basicAlert({
        title: "You don't have that much money in your balance",
        message: 'Take credit?',
        okMessage: 'Yes',
        cancelMessage: 'No',
        onPressOk: () => navigateToCredit(),
        options: { cancelable: true },
      });

      return;
    }

    dispatch(updateBalance({ inputSum: Number(inputSum), activityType, expenseCategory }));
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setInputSum('');
    setExpenseCategory('');
    setInvalidInputSum(false);
    setInvalidExpenseCategory(false);
    setModalVisibiltiy(false);
  };

  return (
    <CenteredModal
      animationType="slide"
      visible={modalVisibility}
      closeModal={closeModalHandler}
    >
      <TextField
        styles={{ marginBottom: 8 }}
        placeholder="Sum"
        keyboardType="numeric"
        onChangeText={setInputSum}
        value={inputSum}
        isError={invalidInputSum}
        errorText="Invalid value"
      />
      {activityType === BALANCE_ACTIVITY_TYPES.EXPENSE && (
        <>
          <SelectList
            placeholder="Select category"
            data={BALANCE_EXPENSE_CATEGORIES.filter((category) => category.key !== EXPENSE_CREDIT_CATEGORY_KEY)}
            setSelected={setExpenseCategory}
            search={false}
            boxStyles={{ borderRadius: 4, paddingLeft: 8 }}
            dropdownStyles={{ borderRadius: 4 }}
            dropdownItemStyles={{ paddingLeft: 8 }}
          />
          {invalidExpenseCategory && <ErrorText text="Category is required" />}
        </>
      )}
      <BasicButton
        styles={{ marginTop: 8 }}
        text="Apply"
        onPress={updateBalanceHandler}
      />
    </CenteredModal>
  );
};
