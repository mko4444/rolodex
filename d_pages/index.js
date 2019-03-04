import React from 'react';
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import Main from './main/index.js';
import Profile from './profile/index.js';
import OnBoarding from './onboarding/index.js';
import Splash from './splash/index.js';
import NewNote from './new-note/index.js';
import NewPerson from './new-person/index.js';

// const MainScreen = ({ navigation }) => <Main nav={navigation}/>;
// const ProfileScreen = ({ navigation }) => (<Profile nav={navigation}/>);
// const SplashScreen = ({ navigation }) => (<Splash nav={navigation}/>);
// const OnBoardingScreen = ({ navigation }) => (<OnBoarding nav={navigation}/>);

const firstTime = false // simulate a first time user

// const MainNavigator = createStackNavigator({
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen }
// }, {
//   cardShadowEnabled: false,
//   cardOverlayEnabled: true,
//   headerMode: "none",
//   headerVisible: false,
//   backBehavior: 'initialRoute',
// });

const FirstTimeNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  OnBoarding: {
    screen: OnBoardingScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  Main: {screen: MainScreen},
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

export default firstTime ? createAppContainer(FirstTimeNavigator) : createAppContainer(MainNavigator);
