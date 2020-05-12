/* eslint-disable no-shadow */
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';
import FormRow from '../components/FormRow';
import {connect} from 'react-redux';
import {setField, saveSerie, setWholeSerie, resetForm} from '../actions';

class SerieFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    const {params} = this.props.route;
    const {setWholeSerie, resetForm} = this.props;
    if (params && params.serieToEdit) {
      setWholeSerie(params.serieToEdit);
    } else {
      resetForm();
    }
  }
  render() {
    const {serieForm, setField, saveSerie, navigation} = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView>
          <View>
            <FormRow>
              <TextInput
                style={styles.input}
                placeholder="título"
                value={serieForm.title}
                onChangeText={value => setField('title', value)}
              />
            </FormRow>
            <FormRow>
              <TextInput
                style={styles.input}
                placeholder="url da imagem"
                value={serieForm.img}
                onChangeText={value => setField('img', value)}
              />
            </FormRow>
            <FormRow>
              <Picker
                selectedValue={serieForm.gender}
                onValueChange={itemValue => setField('gender', itemValue)}>
                <Picker.Item label="policial" value="policial" />
                <Picker.Item label="comédia" value="comédia" />
                <Picker.Item label="terror" value="terror" />
              </Picker>
            </FormRow>
            <FormRow>
              <View style={styles.sameRow}>
                <Text>Nota:</Text>
                <Text>{serieForm.rate}</Text>
              </View>
              <Slider
                onValueChange={value => setField('rate', value)}
                value={serieForm.rate}
                minimumValue={0}
                maximumValue={100}
                step={5} //somente multiplo de 5
              />
            </FormRow>
            <FormRow>
              <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={serieForm.description}
                onChangeText={value => setField('description', value)}
                numberOfLines={5}
                multiline={true}
              />
            </FormRow>
            <FormRow>
              {this.state.isLoading ? (
                <ActivityIndicator />
              ) : (
                <Button
                  title="Salvar"
                  onPress={async () => {
                    this.setState({isLoading: true});
                    try {
                      await saveSerie(serieForm);
                      navigation.goBack();
                    } catch (error) {
                      Alert.alert('Error', error);
                    } finally {
                      this.setState({isLoading: false});
                    }
                  }}
                />
              )}
            </FormRow>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
function mapStateToProps(state) {
  return {
    serieForm: state.serieForm,
  };
}
const mapDispatchToProps = {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SerieFormPage);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#c5c5c5',
    paddingLeft: 10,
  },
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
