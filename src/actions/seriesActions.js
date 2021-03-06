import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
  type: SET_SERIES,
  series,
});
export const watchSeries = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/series`)
      .on('value', snapshot => {
        dispatch(setSeries(snapshot.val()));
      });
  };
};
