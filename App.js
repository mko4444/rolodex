import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main/index.js';
import Profile from './pages/profile/index.js';

const MainScreen = ({ navigation }) => (<Main nav={navigation}/>);

const MainNavigator = createStackNavigator({
  Main: { screen: MainScreen, },
  Profile: {screen: Profile},
},
{
  headerMode: 'none',
  cardShadowEnabled: false,
  cardOverlayEnabled: true,
  cardStyle: {

  },
  navigationOptions: {
    headerVisible: false,
  }
});

export default createAppContainer(MainNavigator);
