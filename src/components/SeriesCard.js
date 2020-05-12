import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SeriesImage from './SeriesImage';
class SeriesCard extends React.Component {
  render() {
    const {series} = this.props;
    const {onNavigate} = this.props;
    return (
      <TouchableOpacity onPress={() => onNavigate.navigate('Detail', {series})}>
        <View style={styles.container}>
          <View style={styles.card}>
            <SeriesImage img={series.img} />
            <View style={styles.cardTitleWrapper}>
              <Text style={styles.cardTitle}>{`${series.title}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default SeriesCard;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
  card: {
    flex: 1,
    borderWidth: 1,
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    height: 50,
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
