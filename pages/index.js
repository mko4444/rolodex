import React from 'react';
import { createStackNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';
import Main from './main/index.js';
import Profile from './profile/index.js';
import Base from './main/index.js';

const MainScreenNavigator = createDrawerNavigator({
  Home: { screen: ({navigation}) => <Base navigation={navigation} /> },
  // Drawer: { screen: NewPersonScreen },
})
const IndividualPersonNavigator = ({navigation}) => <Profile navigation={navigation} />;

export default createAppContainer(
  createStackNavigator({
    Home: { screen: MainScreenNavigator },
    IndividualPerson: { screen: IndividualPersonNavigator},
  },{
    cardShadowEnabled: false,
    cardOverlayEnabled: true,
    headerMode: 'none',
    headerVisible: false,
  })
);
