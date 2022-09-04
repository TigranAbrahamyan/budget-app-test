import React from 'react';
import { useDispatch } from 'react-redux';

import { takeCredit } from '../../../store/actions/balance';
import { BasicButton } from '../../../components/Button';
import { TextField } from '../../../components/Field';

export const TakeCredit = ({ navigateToBalance }) => {
  const dispatch = useDispatch();
  const [creditSum, setCreditSum] = React.useState('');
  const [invalidCreditSum, setInvalidCreditSum] = React.useState(false);

  const takeCreditHandler = () => {
    const decimalPattern = /^\d+(\.\d+)?$/g;

    if (!decimalPattern.test(creditSum)) {
      setInvalidCreditSum(true);
    } else {
      dispatch(takeCredit(creditSum));
      setCreditSum('');
      setInvalidCreditSum(false);
      navigateToBalance();
    }
};

  return (
    <>
      <TextField
        styles={{ marginTop: 16, marginBottom: 16 }}
        placeholder="Sum"
        keyboardType="numeric"
        onChangeText={setCreditSum}
        value={creditSum}
        isError={invalidCreditSum}
        errorText="Invalid value"
      />
      <BasicButton
        styles={{ width: 100 }}
        text="Take"
        onPress={takeCreditHandler}
      />
    </>
  );
};
