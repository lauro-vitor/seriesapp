/* eslint-disable no-shadow */
import React from 'react';
import {View, ScrollView, Image, Button, StyleSheet} from 'react-native';
import RowTable from '../components/RowTable';
import RowLongText from '../components/RowLongText';
import {connect} from 'react-redux';
import {deleteSerie} from '../actions';
class DetailPage extends React.Component {
  render() {
    const {deleteSerie} = this.props;
    const {navigate} = this.props.navigation;
    const {series} = this.props.route.params;
    return (
      <ScrollView>
        <View>
          {series.img ? (
            <Image
              source={{
                uri: series.img,
              }}
              aspectRatio={1}
              resizeMode="stretch"
            />
          ) : null}
          <RowTable label="Título" content={series.title} />
          <RowTable label="gender" content={series.gender} />
          <RowTable label="rate" content={series.rate} />
          <RowLongText label="descrição" content={series.description} />
          <View style={styles.buttonWrapper}>
            <Button
              title="Editar"
              onPress={() => navigate('Form', {serieToEdit: series})}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Deletar"
              color="#ff0000"
              onPress={() => {
                const hasDeleted = deleteSerie(series);
                if (hasDeleted) {
                  this.props.navigation.goBack();
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  buttonWrapper: {
    margin: '2%',
  },
});
const mapDispatchToProps = {
  deleteSerie,
};

export default connect(
  null,
  mapDispatchToProps,
)(DetailPage);
