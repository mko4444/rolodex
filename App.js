import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main/index.js';
import Profile from './pages/profile/index.js';

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Profile: {screen: Profile},
});

export default createAppContainer(MainNavigator);
