import React from 'react';
import { View } from 'react-native';

import routesPath from '../../utils/constants/routesPath';
import { Title } from '../../components/Text';
import { TakeCredit } from './frames';

export const CreditScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 16 }}>
      <Title text="Take credit" />
      <TakeCredit navigateToBalance={() => navigation.navigate(routesPath.BALANCE)} />
    </View>
  );
};
