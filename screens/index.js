import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Login from './Login';
import Help from './Help';
import TimesUp from './TimesUp';
import Open from './Open';

export function registerScreens() {
    Navigation.registerComponent('san.Home', () => Home);
    Navigation.registerComponent('san.Login', () => Login);
    Navigation.registerComponent('san.Help', () => Help);
    Navigation.registerComponent('san.TimesUp', () => TimesUp);
    Navigation.registerComponent('san.Open', () => Open);
}