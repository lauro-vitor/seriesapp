import React from 'react';
import {Button, ActivityIndicator} from 'react-native';
export default props => {
  if (props.isLoading) {
    return <ActivityIndicator />;
  }
  return <Button title="SING IN" onPress={props.onPress} />;
};
