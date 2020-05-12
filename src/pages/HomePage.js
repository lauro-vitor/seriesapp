import React from 'react';
import {View, FlatList} from 'react-native';
import ButtonAddSeries from '../components/ButtonAddSeries';
import SerieCard from '../components/SeriesCard';
import {connect} from 'react-redux';
import {watchSeries} from '../actions';
class HomePage extends React.Component {
  componentDidMount() {
    this.props.watchSeries();
  }
  render() {
    const {series, navigation} = this.props;
    if (series !== null) {
      return (
        <View>
          <FlatList
            data={[...series, {isLast: true}]}
            renderItem={({item, index}) =>
              item.isLast ? (
                <ButtonAddSeries navigation={navigation} />
              ) : (
                <SerieCard series={item} onNavigate={navigation} />
              )
            }
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      );
    }
    return null;
  }
}
const mapStateToProps = state => {
  const {series} = state;
  if (!series) {
    return {series};
  }
  const keys = Object.keys(series);
  const seriesWithKeys = keys.map(id => {
    return {...series[id], id};
  });
  return {series: seriesWithKeys};
};
const mapDispatchToProps = {
  watchSeries,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
