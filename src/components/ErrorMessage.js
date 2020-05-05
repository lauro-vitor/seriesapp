import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default props => {
  if (!props.message) {
    return null;
  }
  return (
    <Text style={props.error ? styles.messageError : styles.messageSucess}>
      {props.message}
    </Text>
  );
};
const styles = StyleSheet.create({
  messageError: {
    color: 'red',
  },
  messageSucess: {
    color: 'green',
  },
});
