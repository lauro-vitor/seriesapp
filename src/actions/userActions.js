import firebase from '@firebase/app';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
const userLoginSucess = user => ({
  type: USER_LOGIN_SUCESS,
  user,
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const tryLogin = ({email, password}) => dispatch => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => dispatch(userLoginSucess(user)))
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        // eslint-disable-next-line no-new
        new Promise((resolve, reject) => {
          Alert.alert(
            'Usuário Não encontrado',
            'Deseja criar um cadastro com as informações inseridas',
            [
              {
                text: 'Não',
                onPress: () => resolve(),
              },
              {
                text: 'Sim',
                onPress: () => {
                  firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(resolve)
                    .catch(reject);
                },
              },
            ],
            {cancelable: false},
          );
        }); //promisse
      }
      return Promise.reject(error);
    });
};
/*Os casos que eu tenho: erros de autenticação e usuário não existente*/
