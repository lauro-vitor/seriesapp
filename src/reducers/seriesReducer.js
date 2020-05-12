/*import series from '../../series.json';
const INITAL_STATE = series;*/
import {SET_SERIES} from '../actions';
export default (state = null, action) => {
  switch (action.type) {
    case SET_SERIES:
      return action.series;
    default:
      return state;
  }
};
