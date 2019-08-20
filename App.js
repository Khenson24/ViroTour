import React from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import ViroSample from './screens/Tour1';
import SplashScreen from './screens/Splash';
import Home from './screens/Home';

import Icon from 'react-native-vector-icons/FontAwesome5'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,

    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color="#900" />
      )
    }
  },
  Tour: {
    screen: ViroSample,

    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map" size={20} color="#900" />
      )
    }
  },
},{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "white",
    inactiveTintColor: "gray",
    style: {
      // top: 20,
      paddingVertical: 5,
      backgroundColor: "red",
      border: "blue"
    },
    labelStyle: {
      fontSize: 12,
      lineHeight: 10,
      textDecorationColor: 'white'
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    unmountInactiveRoutes: true
  }
});

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Tab: TabNavigator
})

export default createAppContainer(InitialNavigator);
