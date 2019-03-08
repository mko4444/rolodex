import React from 'react';
import { createBottomTabNavigator, createStackNavigator,createAppContainer,createDrawerNavigator } from 'react-navigation';
import Main from './main/index.js';
import Profile from './profile/index.js';
import Base from './main/index.js';
import FavoritesScreen from './favorites/index.js';
import SettingsScreen from './settings/index.js';
import { Image } from 'react-native';

const MainScreenNavigator = createDrawerNavigator({
  Home: { screen: ({navigation}) => <Base navigation={navigation} /> },
  // Drawer: { screen: NewPersonScreen },
})

const IndividualPersonNavigator = ({navigation}) => <Profile navigation={navigation} />;

const ConnectionsScreen = createStackNavigator({
    Home: { screen: MainScreenNavigator },
    IndividualPerson: { screen: IndividualPersonNavigator},
  }, {
    cardShadowEnabled: false,
    cardOverlayEnabled: true,
    headerMode: 'none',
    headerVisible: false,
})

export default createAppContainer(
  createBottomTabNavigator({
    FAVORITES: FavoritesScreen,
    CONNECTIONS: ConnectionsScreen,
    SETTINGS: SettingsScreen,
  },{
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const { routeName } = navigation.state;
        let iconName;
        return routeName === "FAVORITES" ?
                focused ? <Image source={require("../assets/shared/tab_one.png")} />
                : <Image source={require("../assets/shared/tab_one_gray.png")} />
             : routeName === "CONNECTIONS" ?
                focused ? <Image source={require("../assets/shared/tab_two.png")} />
                : <Image source={require("../assets/shared/tab_two_gray.png")} />
             : routeName === "SETTINGS" ?
                focused ? <Image source={require("../assets/shared/tab_three.png")} />
                : <Image source={require("../assets/shared/tab_three_gray.png")} />
             : null
      },
      tabBarOptions: {
        showLabel: false, // hide labels
        activeTintColor: "#4392F1",
        inactiveTintColor: "rgba(13,27,44,.25)",
        style: {
          height: 54,
          shadowColor: "rgb(13,27,44)",
          shadowOffset: {width: 0, height: -1 },
          shadowOpacity: .05,
          shadowRadius: 10,
          backgroundColor: "white",
          padding: 0,
        },
        labelStyle: {
          fontWeight: "500"
        }
      }
    })
  })
);
