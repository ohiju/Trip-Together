/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'text-encoding-polyfill';
import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
