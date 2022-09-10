import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateBalance } from '../../../store/actions/balance';
import { updateCredit } from '../../../store/actions/credit';
import { isDecimal } from '../../../utils/validations';
import { BALANCE_ACTIVITY_TYPES, CREDIT_ACTIVITY_TYPES } from '../../../utils/constants';
import { BasicButton } from '../../../components/Button';
import { CenteredModal } from '../../../components/Modal';
import { TextField } from '../../../components/Field';
import { Title } from '../../../components/Text';

export const CreditUpdateModal = ({
  activityType,
  modalVisibility,
  setModalVisibiltiy,
  creditTotal,
}) => {
  const balanceState = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const [inputSum, setInputSum] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const [invalidInputSum, setInvalidInputSum] = React.useState(false);

  const updateCreditHandler = () => {
    if (!isDecimal(inputSum)) {
      setInvalidInputSum(true);
      setInputError('Invalid value');
      return;
    }

    if (activityType === CREDIT_ACTIVITY_TYPES.PAY && Number(inputSum) > balanceState.total) {
      setInvalidInputSum(true);
      setInputError('Not enough money in your balance');
      return;
    }

    if (activityType === CREDIT_ACTIVITY_TYPES.PAY && Number(inputSum) > creditTotal) {
      setInvalidInputSum(true);
      setInputError("You don't have that much credit");
      return;
    }

    dispatch(updateBalance({
      inputSum: Number(inputSum),
      activityType: activityType === CREDIT_ACTIVITY_TYPES.TAKE ? BALANCE_ACTIVITY_TYPES.INCOME : BALANCE_ACTIVITY_TYPES.EXPENSE,
    }));

    dispatch(updateCredit({ inputSum: Number(inputSum), activityType }));
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setInputSum('');
    setInputError('');
    setInvalidInputSum(false);
    setModalVisibiltiy(false);
  };

  return (
    <CenteredModal
      animationType="slide"
      visible={modalVisibility}
      closeModal={closeModalHandler}
    >
      <Title text={`Your balance - $${balanceState.total.toFixed(2)}`} />
      <TextField
        styles={{ marginTop: 8, marginBottom: 8 }}
        placeholder="Sum"
        keyboardType="numeric"
        onChangeText={setInputSum}
        value={inputSum}
        isError={invalidInputSum}
        errorText={inputError}
      />
      <BasicButton
        text="Apply"
        onPress={updateCreditHandler}
      />
    </CenteredModal>
  );
};
