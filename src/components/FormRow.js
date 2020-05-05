import React from 'react';
import {View, StyleSheet} from 'react-native';
export default props => <View style={styles.row}>{props.children}</View>;
const styles = StyleSheet.create({
  row: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
