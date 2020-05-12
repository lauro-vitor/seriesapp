import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import serieFormReducer from './serieFormReducer';
import seriesReducer from './seriesReducer';
export default combineReducers({
  user: UserReducer,
  serieForm: serieFormReducer,
  series: seriesReducer,
});
