import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";
import NavigationService from "./component/navigationservice/NavigationService";
import Loading from "../loading";
import Home from "../home";

const routes = {
  Loading: { screen: Loading },
  Home: { screen: Home },
};

const stackconfig = {
  initialRouteName: "Loading",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#506195",
      height: 57,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    animationEnabled: false,
  },
};

const routernav = createStackNavigator(routes, stackconfig);

const Appcontainer = createAppContainer(routernav);

export default class Router extends Component {
  render() {
    return (
      <Appcontainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
