import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';
import MyButton from '../components/MyButton';
import ErrorMessage from '../components/ErrorMessage';
import firebase from '@firebase/app';
import '@firebase/auth';
import {connect} from 'react-redux';
import {tryLogin} from '../actions';
import {getMessageByError} from '../util/getMessageByError';
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
      isError: false,
    };
  }
  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            value={this.state.email}
            onChangeText={evt => this.onChengeHandler(evt, 'email')}
            style={styles.input}
            placeholder="name@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormRow>
        <FormRow>
          <TextInput
            value={this.state.password}
            onChangeText={evt => this.onChengeHandler(evt, 'password')}
            style={styles.input}
            placeholder="******"
            secureTextEntry
          />
        </FormRow>

        <FormRow>
          <MyButton
            isLoading={this.state.isLoading}
            onPress={() => this.tryLogin()}
          />
        </FormRow>
        <FormRow>
          <ErrorMessage
            message={this.state.message}
            error={this.state.isError}
          />
        </FormRow>
      </View>
    );
  } // end-render
  //methods
  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyClKL1EI8vCVmfN-Sd1pZFW4OPbun5AhNo',
      authDomain: 'series-5e055.firebaseapp.com',
      databaseURL: 'https://series-5e055.firebaseio.com',
      projectId: 'series-5e055',
      storageBucket: 'series-5e055.appspot.com',
      messagingSenderId: '466003533041',
      appId: '1:466003533041:web:6315f492681c3ce4741d50',
      measurementId: 'G-887D6W37TP',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  onChengeHandler(value, field) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  tryLogin() {
    this.setState({isLoading: true, message: ''});
    const {email, password} = this.state;
    this.props
      .tryLogin({email, password})
      .then(() => {
        this.setState({message: 'Sucesso!'});
        this.props.navigation.replace('Main');
      })
      .catch(error => {
        console.log('here catch ', getMessageByError(error));
        this.setState({
          isLoading: false,
          message: getMessageByError(error),
          isError: true,
        });
        return;
      });
  }
  /**/
}
export default connect(
  null,
  {tryLogin},
)(LoginPage);
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#c5c5c5',
    paddingLeft: 10,
  },
});
