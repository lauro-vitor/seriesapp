import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
class ButtonAddSeries extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate('Form')}>
        <Image
          source={require('../../resource/img/plus.png')}
          style={styles.img}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 162,
    maxHeight: 310,
    width: '45%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
export default ButtonAddSeries;
