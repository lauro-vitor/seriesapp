import * as actions from '../actions';
export default (state = null, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_SUCESS: {
      console.log(action.user);
      return action.user;
    }
    case actions.USER_LOGOUT: {
      return null;
    }
    default:
      return state;
  }
};
