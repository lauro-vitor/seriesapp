import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info',
]);
import SeriesApp from './src/SeriesApp';
export default SeriesApp;
