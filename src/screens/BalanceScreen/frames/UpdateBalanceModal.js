import React from 'react';
import { useDispatch } from 'react-redux';

import { updateBalance } from '../../../store/actions/balance';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { CenteredModal } from '../../../components/Modal';

export const UpdateBalanceModal = ({ activityType, modalVisibility, setModalVisibiltiy }) => {
  const dispatch = useDispatch();
  const [inputSum, setInputSum] = React.useState('');
  const [invalidInputSum, setInvalidInputSum] = React.useState(false);

  const updateBalanceHandler = () => {
    const decimalPattern = /^\d+(\.\d+)?$/g;

    if (!decimalPattern.test(inputSum)) {
      setInvalidInputSum(true);
    } else {
      dispatch(updateBalance({ inputSum, activityType }));
      closeModalHandler();
    }
  };

  const closeModalHandler = () => {
    setInputSum('');
    setModalVisibiltiy(false);
    setInvalidInputSum(false);
  };

  return (
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
        isError={invalidInputSum}
        errorText="Invalid value"
      />
      <BasicButton
        styles={{ marginTop: 8, marginBottom: 8 }}
        text="Apply"
        onPress={updateBalanceHandler}
      />
    </CenteredModal>
  );
};
