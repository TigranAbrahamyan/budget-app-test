import React from 'react';
import { useDispatch } from 'react-redux';

import { updateBalance } from '../../../store/actions/balance';
import { isDecimal } from '../../../utils/validations/validations';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';
import { CenteredModal } from '../../../components/Modal';

export const UpdateBalanceModal = ({ activityType, modalVisibility, setModalVisibiltiy }) => {
  const dispatch = useDispatch();
  const [inputSum, setInputSum] = React.useState('');
  const [invalidInputSum, setInvalidInputSum] = React.useState(false);

  const updateBalanceHandler = () => {
    if (isDecimal(inputSum)) {
      dispatch(updateBalance({ inputSum, activityType }));
      closeModalHandler();
    } else {
      setInvalidInputSum(true);
    }
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
