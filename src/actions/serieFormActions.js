/* eslint-disable no-new */
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {Alert} from 'react-native';

export const deleteSerie = serie => {
  return dispatch => {
    new Promise((resolve, reject) => {
      Alert.alert(
        'Deletar',
        `Deseja deletar a série ${serie.title}`,
        [
          {
            text: 'Não',
            onPress: () => resolve(false),
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();
              try {
                await firebase
                  .database()
                  .ref(`users/${currentUser.uid}/series/${serie.id}`)
                  .remove();
                resolve(true);
              } catch (error) {
                reject(error);
              }
            },
          },
        ],
        {cancelable: false},
      );
    }); //promisse
  };
};

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie,
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => ({
  type: SET_FIELD,
  field,
  value,
});

export const SERIE_SAVED_SUCESS = 'SERIE_SAVED_SUCESS';
const serieSavedSucess = () => ({
  type: SERIE_SAVED_SUCESS,
});

export const saveSerie = serie => {
  const {currentUser} = firebase.auth(); // retorna o usuário atual
  return async dispatch => {
    if (serie.id) {
      await firebase
        .database()
        .ref(`users/${currentUser.uid}/series/${serie.id}`)
        .set(serie);
    } else {
      await firebase
        .database()
        .ref(`users/${currentUser.uid}/series`)
        .push(serie);
    }
    dispatch(serieSavedSucess());
  };
};
