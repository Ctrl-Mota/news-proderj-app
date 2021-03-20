import React, { Component } from "react";
import { View, ActivityIndicator, Text, Image, Alert } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { api } from "../../domain/api";

export default class Loading extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.loadingApp();
  }

  loadingApp() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Home",
            params: {
              refresh: false,
            },
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ alignSelf: "center", width: "90%", height: "30%" }}
          source={require("./assets/img/ultimas_noticias.png")}
        />
        <Text style={{ alignSelf: "center" }}>Carregando "noticias"...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
