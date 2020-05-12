import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
export default props => {
  if (props.img) {
    return (
      <Image source={{uri: props.img}} aspectRatio={1} resizeMode="stretch" />
    );
  }
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
