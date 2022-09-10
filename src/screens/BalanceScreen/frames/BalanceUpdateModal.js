import React from 'react';
import { useDispatch } from 'react-redux';

import { updateBalance } from '../../../store/actions/balance';
import { isDecimal } from '../../../utils/validations';
import { BALANCE_ACTIVITY_TYPES } from '../../../utils/constants';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { CenteredModal } from '../../../components/Modal';
import { basicAlert } from '../../../components/Alert';

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

  const updateBalanceHandler = () => {
    if (!isDecimal(inputSum)) {
      setInvalidInputSum(true);
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

    dispatch(updateBalance({ inputSum: Number(inputSum), activityType }));
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setInputSum('');
    setInvalidInputSum(false);
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
      <BasicButton
        text="Apply"
        onPress={updateBalanceHandler}
      />
    </CenteredModal>
  );
};
