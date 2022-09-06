import React from 'react';
import { View } from 'react-native';

import { ROUTE_NAMES } from '../../utils/routes/routeNames';
import { Title } from '../../components/Text';
import { TakeCredit } from './frames';

export const CreditScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 16 }}>
      <Title text="Take credit" />
      <TakeCredit navigateToBalance={() => navigation.navigate(ROUTE_NAMES.BALANCE)} />
    </View>
  );
};
